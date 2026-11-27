import { component$, useContext, useTask$ } from "@qwik.dev/core";
import { quantumData } from "../_models/quantumContext";

export default component$(() => {
	const quantumDataContext = useContext(quantumData);

	useTask$(({ track }) => {
		track(() => quantumDataContext.quantum09.value);

		if (!quantumDataContext.quantum09.value) return;

		quantumDataContext.quantum10.value = quantumDataContext.quantum09.value;
	});

	return null;
});
