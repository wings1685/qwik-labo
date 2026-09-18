import { component$, useContext, useTask$ } from "@builder.io/qwik";
import { quantumData } from "../_models/quantumContext";

export default component$(() => {
	const quantumDataContext = useContext(quantumData);

	useTask$(({ track }) => {
		track(() => quantumDataContext.quantum07.value);

		if (!quantumDataContext.quantum07.value) return;

		quantumDataContext.quantum08.value = quantumDataContext.quantum07.value;
	});

	return null;
});
