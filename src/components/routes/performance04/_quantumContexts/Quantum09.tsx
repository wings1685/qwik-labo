import { component$, useComputed$, useContext, useTask$ } from "@builder.io/qwik";
import { logStore } from "../_models/performance";
import { quantumData } from "../_models/quantumContext";

export default component$(() => {
	const quantumDataContext = useContext(quantumData);

	const relayData = useComputed$(() => {
		if (!quantumDataContext.quantum09.value) return 0;

		logStore();
		return quantumDataContext.quantum09.value;
	});

	useTask$(({ track }) => {
		track(() => relayData.value);

		if (!relayData.value) return;

		quantumDataContext.quantum10.value = relayData.value;
	});

	return null;
});
