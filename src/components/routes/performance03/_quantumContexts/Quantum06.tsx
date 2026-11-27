import { component$, useContext, useTask$ } from "@qwik.dev/core";
import { quantumData } from "../_models/quantumContext";

export default component$(() => {
	const quantumDataContext = useContext(quantumData);

	useTask$(({ track }) => {
		track(() => quantumDataContext.quantum06.value);

		if (!quantumDataContext.quantum06.value) return;

		quantumDataContext.quantum07.value = quantumDataContext.quantum06.value;
	});

	return null;
});
