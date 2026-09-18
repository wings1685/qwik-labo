/* eslint-disable qwik/no-use-visible-task */
import { component$, useContext, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { raceIdData } from "../_models/raceIdContext";
import { relayData } from "../_models/relayContext";
import { recordStart, recordFinished } from "../_models/performance";
import { Child01 } from "./";

export default component$(() => {
	const raceIdDataContext = useContext(raceIdData);
	const relayDataContext = useContext(relayData);
	const relayStart = useSignal(0);

	useVisibleTask$(({ track }) => {
		track(() => raceIdDataContext.value);
		track(() => relayDataContext.value);

		if (raceIdDataContext.value !== 'Props' || relayDataContext.value) return;

		recordStart('Props');
		relayStart.value = 1;
	});

	useVisibleTask$(({ track }) => {
		track(() => raceIdDataContext.value);
		track(() => relayDataContext.value);

		if (raceIdDataContext.value !== 'Context' || !relayDataContext.value) return;

		recordFinished('Context');
		relayDataContext.value = 0;
		relayStart.value = 0;

		raceIdDataContext.value = 'Memo';
	});

	return <Child01 relay={ relayStart.value } />;
});
