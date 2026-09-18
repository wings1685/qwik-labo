/* eslint-disable qwik/no-use-visible-task */
import { $, component$, useContext, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { provideSignalContext } from "@/_global/contexts";
import { startHydration } from "../_models/contexts";
import { picKeys, records, recordStart } from "../_models/performance";
import { OnMount, Pic } from "./";

export default component$(() => {
	const startHydrationContext = provideSignalContext(useContext(startHydration));

	const text = useSignal('');
	const startReRender = useSignal(0);

	const handleStart$ = $((el: HTMLInputElement) => {
		startReRender.value = records.ReRender.start;
		text.value = el.value;
	});
	const handleChange$ = $((el?: HTMLInputElement) => {
		if (!el) return;

		recordStart('ReRender');
		handleStart$(el);
	});
	useVisibleTask$(() => {
		handleChange$();
	});

	return (
		<form id="pics">
			<fieldset>
				<input type="text" onChange$={ (_, el) => handleChange$(el) } />
			</fieldset>
			{picKeys.map(picKey => (
				<Pic key={ picKey } picKey={ picKey } />
			))}
			<fieldset>
				<p>{ text.value }</p>
			</fieldset>
			<OnMount start={ startHydrationContext.signal.value } target="Hydration" />
			<OnMount start={ startReRender.value } target="ReRender" />
		</form>
	)
});
