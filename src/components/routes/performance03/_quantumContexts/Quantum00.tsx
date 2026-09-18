import { component$, useContext, useTask$ } from "@builder.io/qwik";
import { recordStart } from "../_models/performance"
import { quantumData } from "../_models/quantumContext";

export default component$(() => {
	const quantumDataContext = useContext(quantumData);

	useTask$(({ track }) => {
		track(() => quantumDataContext.quantumStart.value);

		if (!quantumDataContext.quantumStart.value) return;

		recordStart('QuantumContext');
		quantumDataContext.quantum01.value = quantumDataContext.quantumStart.value;
	});

	return null;
});
