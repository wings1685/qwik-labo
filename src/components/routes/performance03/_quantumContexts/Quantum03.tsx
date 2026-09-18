import { component$, useContext, useTask$ } from "@builder.io/qwik";
import { quantumData } from "../_models/quantumContext";

export default component$(() => {
	const quantumDataContext = useContext(quantumData);

	useTask$(({ track }) => {
		track(() => quantumDataContext.quantum03.value);

		if (!quantumDataContext.quantum03.value) return;

		quantumDataContext.quantum04.value = quantumDataContext.quantum03.value;
	});

	return null;
});
