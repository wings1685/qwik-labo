import { component$, useContext, useTask$ } from "@builder.io/qwik";
import { quantumData } from "../_models/quantumContext";

export default component$(() => {
	const quantumDataContext = useContext(quantumData);

	useTask$(({ track }) => {
		track(() => quantumDataContext.quantum04.value);

		if (!quantumDataContext.quantum04.value) return;

		quantumDataContext.quantum05.value = quantumDataContext.quantum04.value;
	});

	return null;
});
