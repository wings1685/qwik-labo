import { $, component$, useContext, useSignal, useTask$ } from "@builder.io/qwik";
import { relayData } from "../_models/relayContext";
import { Child01 } from "./";
import { recordFinished } from "../_models/performance";
import type { RelayData } from "../_models/relayContext";

export default component$(() => {
	const relayDataContext = useContext(relayData);
	const relay = useSignal(0);
	const setRelay = $((value: RelayData) => { relay.value = value; });

	useTask$(({ track }) => {
		track(() => relayDataContext.value);

		recordFinished('RelayContext');
	});

	useTask$(({ track }) => {
		track(() => relay.value);

		recordFinished('RelaySetter');
	});

	return <Child01 relay={ relay.value } setRelay={ setRelay } />;
});
