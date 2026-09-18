import { component$, useContext, useTask$ } from "@builder.io/qwik";
import { quantumData } from "../_models/quantumContext";

export default component$(() => {
	const quantumDataContext = useContext(quantumData);

	useTask$(({ track }) => {
		track(() => quantumDataContext.quantum08.value);

		if (!quantumDataContext.quantum08.value) return;

		quantumDataContext.quantum09.value = quantumDataContext.quantum08.value;
	});

	return null;
});
