import { component$, useComputed$, useContext, useTask$ } from "@builder.io/qwik";
import { logStore } from "../_models/performance";
import { quantumData } from "../_models/quantumContext";

export default component$(() => {
	const quantumDataContext = useContext(quantumData);

	const relayData = useComputed$(() => {
		if (!quantumDataContext.quantum02.value) return 0;

		logStore();
		return quantumDataContext.quantum02.value;
	});

	useTask$(({ track }) => {
		track(() => relayData.value);

		if (!relayData.value) return;

		quantumDataContext.quantum03.value = relayData.value;
	});

	return null;
});
