/* eslint-disable qwik/no-use-visible-task */
import { $, component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { QuantumCircuit } from "./";

export default component$(() => {
	const start = useSignal(0);

	const handleClick$ = $((isActive: boolean = false) => {
		if (!isActive) return;

		start.value++;
	});
	useVisibleTask$(() => {
		handleClick$();
	});

	return (
		<fieldset>
			<button onClick$={ () => handleClick$(true) }>50 連鎖スタート</button>
			<QuantumCircuit start={ start.value } />
		</fieldset>
	)
});
