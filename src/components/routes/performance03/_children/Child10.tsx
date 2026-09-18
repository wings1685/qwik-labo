/* eslint-disable qwik/no-use-visible-task */
import { $, component$, useContext, useVisibleTask$ } from "@builder.io/qwik";
import { recordStart } from "../_models/performance";
import { relayData } from "../_models/relayContext";
import type { RelayProps } from "../_models/relayContext";

export default component$((props: RelayProps) => {
	const relayDataContext = useContext(relayData);

	const handleStartContext$ = $((value: number) => {
		relayDataContext.value = value;
	});
	const handleStartSetter$ = $((value: number) => {
		props.setRelay(value);
	});
	const handleChange$ = $((isActive: boolean = false) => {
		if (!isActive) return;

		const start = relayDataContext.value + 1;

		recordStart('RelayContext');
		handleStartContext$(start);

		recordStart('RelaySetter');
		handleStartSetter$(start);
	});

	useVisibleTask$(() => {
		handleChange$();
	});

	return (
		<fieldset>
			<input type="number" onChange$={ () => handleChange$(true) } value={ props.relay } />
		</fieldset>
	);
});
