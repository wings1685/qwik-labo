/* eslint-disable qwik/no-use-visible-task */
import { $, component$, useComputed$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { recordStart } from "../_models/performance";
import { OnMount } from "./";

export default component$(() => {
	const amount = useSignal(0);

	const quantity = 2;

	const subTotal = useComputed$(() => amount.value * quantity);

	const tax = useComputed$(() => subTotal.value / 10);

	const total = useComputed$(() => subTotal.value + tax.value);

	const handleStart$ = $((el: HTMLInputElement) => {
		amount.value = +el.value;
	});
	const handleChange$ = $((el?: HTMLInputElement) => {
		if (!el) return;

		recordStart('Receipt');
		handleStart$(el);
	});
	useVisibleTask$(() => {
		handleChange$();
	});

	return (
		<>
			<fieldset>
				<span>金額</span>
				<input type="number" value={ amount.value } onChange$={ (_, el) => handleChange$(el) } />
			</fieldset>
			<fieldset>
				<span>小計</span>
				<span>{ subTotal.value }</span>
			</fieldset>
			<fieldset>
				<span>消費税</span>
				<span>{ tax.value }</span>
			</fieldset>
			<fieldset>
				<span>合計</span>
				<span>{ total.value }</span>
			</fieldset>
			<OnMount start={ amount.value } target="Receipt" />
		</>
	)
});
