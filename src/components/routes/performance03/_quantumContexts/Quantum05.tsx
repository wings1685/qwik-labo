import { component$, useContext, useTask$ } from "@builder.io/qwik";
import { quantumData } from "../_models/quantumContext";

export default component$(() => {
	const quantumDataContext = useContext(quantumData);

	useTask$(({ track }) => {
		track(() => quantumDataContext.quantum05.value);

		if (!quantumDataContext.quantum05.value) return;

		quantumDataContext.quantum06.value = quantumDataContext.quantum05.value;
	});

	return null;
});
