/* eslint-disable qwik/no-use-visible-task */
import { component$, useContext, useVisibleTask$ } from "@builder.io/qwik";
import { recordStart } from "../_models/performance"
import { quantumData } from "../_models/quantumContext";
import { raceIdData } from "../_models/raceIdContext";

export default component$(() => {
	const raceIdDataContext = useContext(raceIdData);
	const quantumDataContext = useContext(quantumData);

	const num = { value: 0 };

	useVisibleTask$(({ track }) => {
		track(() => raceIdDataContext.value);

		if (raceIdDataContext.value !== 'Store') return;

		recordStart('Store');
		quantumDataContext.quantum01.value = num.value + 1;
		num.value++;
	});

	return null;
});
