import { $, component$, useComputed$, useSignal, useStore, useTask$ } from "@builder.io/qwik";
import { isServer } from "@builder.io/qwik";
import * as v from "valibot";
import type { Component, QRL } from "@builder.io/qwik";
import type { FormProps, FormErrors, BindElements, BindElementKey } from "./types";

type BindElementStatus = { initialValue: unknown, value: unknown, isDirty: boolean, hasInjectedError: boolean };
type BindElementsStatus = Record<BindElementKey, BindElementStatus>;
type ScrollTargets = { el: HTMLElement, top: number }[];
type Total = number;
type Props<T> = {
	TargetForm: Component<FormProps<T>>;
	schema: QRL<() => v.GenericSchema<T>>;
	initialValues: T;
	initialDirty?: boolean;
	scrollGap?: number;
};

const updateStates = <U extends object>(states: U, target: U) => {
	for (const key in states) {
		delete states[key];
	}
	Object.assign(states, target);
};

const isCheckable = (el: HTMLElement) => ['checkbox', 'radio'].includes(el.getAttribute('type') ?? '');
const getElementValue = (el: HTMLElement) => {
	if (isCheckable(el)) {
		return (+('checked' in el && el.checked ? el.checked : false)).toString();
	} else {
		return 'value' in el && el.value ? el.value.toString() : '';
	}
};

export default component$(<T extends object>(props: Props<T>) => {
	const { TargetForm, schema, initialValues, initialDirty = false, scrollGap = 0 } = props;

	const data = useStore<T>(structuredClone(initialValues));

	const bindElements: BindElements = {};
	const bindElementsStatus: BindElementsStatus = {};
	const addElementStatus$ = $(async (key: BindElementKey, el: HTMLElement) => {
		const value = getElementValue(el);
		if (bindElementsStatus[key]) {
			const mergedValues = `${bindElementsStatus[key].value}${value}`;
			bindElementsStatus[key].initialValue = mergedValues;
			bindElementsStatus[key].value = mergedValues;
		} else {
			bindElementsStatus[key] = { initialValue: value, isDirty: false, value: value, hasInjectedError: false };
		}
	});
	const updateElementsStatus$ = $(() => {
		const statuses = Object.entries(bindElementsStatus);
		const dirtyKeys: BindElementKey[] = [];
		const changedKeys: BindElementKey[] = [];
		for (const [key, status] of statuses) {
			if (!bindElements[key] || !bindElements[key].length) continue;

			const value = bindElements[key].map(el => getElementValue(el)).join('');
			if (value === status.value) continue;

			if (value !== status.initialValue && !status.isDirty) {
				dirtyKeys.push(key);
				bindElementsStatus[key].isDirty = true;
			} else if (status.isDirty) {
				dirtyKeys.push(key);
			}
			changedKeys.push(key);
			bindElementsStatus[key].value = value;
		}

		return { dirtyKeys, changedKeys };
	});

	const bindElement$ = $(async (_: Event, el: HTMLElement) => {
		const key = 'name' in el && el.name ? el.name.toString() : el.dataset.el ?? '';
		if (!key) return;

		if (isCheckable(el)) {
			const elements = bindElements[key] as HTMLInputElement[];
			const elInput = el as HTMLInputElement;
			if (elements?.find(element => element.value === elInput.value)) return;
		} else {
			if (bindElements[key]) return;
		}
		if (!bindElements[key]) bindElements[key] = [];
		bindElements[key].push(el);
		await addElementStatus$(key, el);
	});
	const resetBindElements$ = $(async () => {
		const elements = Object.values(bindElements);
		updateStates(bindElements, {});
		updateStates(bindElementsStatus, {});

		const bindEvent = new Event('focus');
		for (const element of elements) {
			const aliveElements = element.filter(el => document.body.contains(el));
			for (const el of aliveElements) {
				await bindElement$(bindEvent, el);
			}
		}
	});

	type IsDirty = Pick<FormProps<T>, 'isDirty'>['isDirty'];
	const handledDirty = useSignal<IsDirty>(initialDirty);
	const setDirty$ = $((value: IsDirty = false) => handledDirty.value = value);
	const isDirty = useComputed$(() => handledDirty.value || JSON.stringify(initialValues) !== JSON.stringify(data));

	const allErrors = useStore<FormErrors>({});
	const errorsTotal = useSignal<Total>(0);
	const setErrorsTotal$ = $((value: Total) => errorsTotal.value = value);
	const setErrorsStates$ = $(async (states: FormErrors = {}) => {
		updateStates(allErrors, states);
		await setErrorsTotal$(Object.keys(allErrors).length);
	});
	const injectedErrors = useStore<FormErrors>({});
	const injectErrors$ = $((values: FormErrors) => {
		Object.keys(values).filter(key => bindElementsStatus[key]).forEach(key => {
			bindElementsStatus[key].hasInjectedError = true;
		});
		updateStates(injectedErrors, values);
	});
	const validate$ = $(async (values: T) => {
		const dataSchema = await schema();
		const result = v.safeParse(dataSchema, values);
		if (!isDirty.value || result.success) return {};

		const issues = v.flatten<typeof dataSchema>(result.issues);
		let receivedErrors: FormErrors = {};
		if (issues.root) receivedErrors._root = issues.root;
		if (issues.nested) receivedErrors = { ...receivedErrors, ...issues.nested };

		return receivedErrors;
	});
	const squeezeErrors$ = $(async (validationErrors: FormErrors, injectedErrors: FormErrors) => {
		const { dirtyKeys, changedKeys } = await updateElementsStatus$();
		changedKeys.filter(key => bindElementsStatus[key].hasInjectedError).forEach(key => {
			bindElementsStatus[key].hasInjectedError = false;
		});
		const squeezedInjectedErrors = Object.fromEntries(Object.keys(injectedErrors)
			.filter(key => !dirtyKeys.includes(key) || bindElementsStatus[key].hasInjectedError)
			.map(key => [ key, injectedErrors[key] ]));
		const dirtyErrors = Object.fromEntries(Object.keys(validationErrors).map(key => (
			[ key, bindElementsStatus[key] && bindElementsStatus[key].isDirty ? validationErrors[key] : undefined ]
		)));

		return { ...squeezedInjectedErrors, ...dirtyErrors };
	});
	const buildErrors$ = $(async (values: T, injectedErrors: FormErrors) => {
		const validationErrors = await validate$(values);

		const squeezedErrors = await squeezeErrors$(validationErrors, injectedErrors);
		await setErrorsStates$(squeezedErrors);
	});
	const errors = useComputed$(() => allErrors);

	type IsSubmitting = Pick<FormProps<T>, 'isSubmitting'>['isSubmitting'];
	const submitting = useSignal<IsSubmitting>(false);
	const setSubmitting$ = $((value: IsSubmitting = false) => submitting.value = value);
	const isSubmitting = useComputed$(() => submitting.value);

	const isValid = useComputed$(() => errorsTotal.value === 0);

	const isSubmitDisabled = useComputed$(() => !isValid.value || !isDirty.value || isSubmitting.value );

	const scrollByErrors$ = $(() => {
		if (isServer) return;
		if (Object.keys(bindElements).length === 0) return;
		if (errorsTotal.value === 0) return;

		const scrollTargets: ScrollTargets = Object.keys(allErrors).filter(key => bindElements[key]?.length > 0).map(key => {
			const el = bindElements[key][0];

			return { el: el, top: el.getBoundingClientRect().top };
		});
		if (scrollTargets.length === 0) return;

		scrollTargets.sort((a, b) => a.top - b.top);
		window.scrollTo({ top: scrollTargets[0].top - scrollGap, behavior: 'smooth' });
	});

	const onSubmit$ = $(async (handler?: () => void | Promise<void>) => {
		if (isSubmitDisabled.value) return;

		await setSubmitting$(true);

		try {
			await handler?.();
		} finally {
			await setSubmitting$();
			await scrollByErrors$();
		}
	});

	const reset$ = $(async () => {
		updateStates(data, structuredClone(initialValues));
		await injectErrors$({});
		await setDirty$(initialDirty);
		await resetBindElements$();
	});

	useTask$(async ({ track }) => {
		track(() => JSON.stringify(data));
		track(() => JSON.stringify(injectedErrors));

		await buildErrors$(data, injectedErrors);
	});

	return <TargetForm
		data={ data }
		errors={ errors.value }
		setErrors$={ injectErrors$ }
		isValid={ isValid.value }
		isDirty={ isDirty.value }
		setDirty$={ setDirty$ }
		isSubmitting={ isSubmitting.value }
		setSubmitting$={ setSubmitting$ }
		isSubmitDisabled={ isSubmitDisabled.value }
		bindElement$={ bindElement$ }
		onSubmit$={ onSubmit$ }
		reset$={ reset$ }
	/>
});
