/* eslint-disable qwik/no-use-visible-task */
import { component$, useComputed$, useContext, useVisibleTask$ } from "@builder.io/qwik";
import { quantumData } from "../_models/quantumContext";
import { logStore, recordFinished } from "../_models/performance";

export default component$(() => {
	const quantumDataContext = useContext(quantumData);

	const relayData = useComputed$(() => {
		if (!quantumDataContext.quantum10.value) return 0;

		logStore();
		return quantumDataContext.quantum10.value;
	});

	useVisibleTask$(({ track }) => {
		track(() => relayData.value);

		if (!relayData.value) return;

		recordFinished('Store');
		recordFinished('Race');
	});

	return null;
});
