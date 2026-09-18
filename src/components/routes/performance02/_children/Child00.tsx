/* eslint-disable qwik/no-use-visible-task */
import { $, component$, useContext, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { relayData } from "../_models/relayContext";
import { Child01 } from "./";
import { recordStart } from "../_models/performance";

export default component$(() => {
	const relayDataContext = useContext(relayData);
	const relayStart = useSignal(0);

	const handleStart$ = $(() => {
		const start = relayStart.value + 1;
		recordStart('RelayProps');
		relayStart.value = start;

		recordStart('RelayContext');
		relayDataContext.value++;
	});
	const handleClick$ = $((isActive: boolean = false) => {
		if (!isActive) return;

		handleStart$();
	});

	useVisibleTask$(() => {
		handleClick$();
	});

	return (
		<>
			<fieldset>
				<button onClick$={ () => handleClick$(true) }>バケツリレー開始</button>
			</fieldset>
			<Child01 relay={ relayStart.value } />
		</>
	)
});
