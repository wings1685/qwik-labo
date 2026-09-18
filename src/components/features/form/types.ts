import type { QRL } from "@builder.io/qwik";

export type FormErrorValues = string[] | undefined;
export type FormErrors = Record<string, FormErrorValues>;
export type BindElementKey = string;
export type BindElements = Record<BindElementKey, HTMLElement[]>;
type Is = boolean;
type SetProps<T> = QRL<(value?: T) => void>;
export type FormProps<T> = {
	data: T;
	errors: FormErrors;
	setErrors$: QRL<(errors: FormErrors) => void>;
	isValid: Is;
	isDirty: Is;
	setDirty$: SetProps<Is>;
	isSubmitting: Is;
	setSubmitting$: SetProps<Is>;
	isSubmitDisabled: Is;
	bindElement$: QRL<(_: Event, el: HTMLElement) => void>;
	onSubmit$: QRL<(handler?: QRL<() => void | Promise<void>>) => void>;
	reset$: QRL<() => void>;
};
