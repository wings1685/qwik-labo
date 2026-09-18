import { component$, useContext, useTask$ } from "@builder.io/qwik";
import { quantumData } from "../_models/quantumContext";

export default component$(() => {
	const quantumDataContext = useContext(quantumData);

	useTask$(({ track }) => {
		track(() => quantumDataContext.quantum01.value);

		if (!quantumDataContext.quantum01.value) return;

		quantumDataContext.quantum02.value = quantumDataContext.quantum01.value;
	});

	return null;
});
