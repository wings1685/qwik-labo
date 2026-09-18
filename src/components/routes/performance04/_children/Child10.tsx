/* eslint-disable qwik/no-use-visible-task */
import { component$, useComputed$, useContext, useVisibleTask$ } from "@builder.io/qwik";
import { logContext, logProps, recordFinished, recordStart } from "../_models/performance";
import { raceIdData } from "../_models/raceIdContext";
import { relayData } from "../_models/relayContext";
import type { RelayProps } from "../_models/relayContext";

export default component$((props: RelayProps) => {
	const raceIdDataContext = useContext(raceIdData);
	const relayDataContext = useContext(relayData);

	const relay = useComputed$(() => {
		if (!props.relay) return 0;

		logProps();
		return props.relay;
	});

	useVisibleTask$(({ track }) => {
		track(() => raceIdDataContext.value);
		track(() => relay.value);

		if (raceIdDataContext.value !== 'Props' || !relay.value) return;

		recordFinished('Props');

		raceIdDataContext.value = 'Context';
		recordStart('Context');
		logContext();
		relayDataContext.value = 1;
	});

	return null;
});
