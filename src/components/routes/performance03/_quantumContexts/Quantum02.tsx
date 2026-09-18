import { component$, useContext, useTask$ } from "@builder.io/qwik";
import { quantumData } from "../_models/quantumContext";

export default component$(() => {
	const quantumDataContext = useContext(quantumData);

	useTask$(({ track }) => {
		track(() => quantumDataContext.quantum02.value);

		if (!quantumDataContext.quantum02.value) return;

		quantumDataContext.quantum03.value = quantumDataContext.quantum02.value;
	});

	return null;
});
