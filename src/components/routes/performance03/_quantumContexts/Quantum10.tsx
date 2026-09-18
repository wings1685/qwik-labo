import { $, component$, useContext, useTask$ } from "@builder.io/qwik";
import { quantumData } from "../_models/quantumContext";
import { loopTotal, recordFinished } from "../_models/performance";

export default component$(() => {
	const quantumDataContext = useContext(quantumData);

	const incrementContext$ = $((value: number) => {
		quantumDataContext.quantum01.value = value + 1;
	});

	useTask$(({ track }) => {
		track(() => quantumDataContext.quantum10.value);

		if (!quantumDataContext.quantum10.value) return;

		if (quantumDataContext.quantum10.value >= loopTotal) {
			recordFinished('QuantumContext');

			quantumDataContext.quantumStart.value = 0;
			return;
		}

		incrementContext$(quantumDataContext.quantum10.value);
	});

	return null;
});
