/* eslint-disable qwik/no-use-visible-task */
import { $, component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { RaceTask, RaceComputed, RaceVisibleTask } from "./";

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
			<button onClick$={ () => handleClick$(true) }>10 連鎖スタート</button>
			<RaceTask start={ start.value } />
			<RaceComputed start={ start.value } />
			<RaceVisibleTask start={ start.value } />
		</fieldset>
	)
});
