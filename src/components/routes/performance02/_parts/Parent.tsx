import { component$, useContextProvider, useSignal } from "@builder.io/qwik";
import { relayData } from "../_models/relayContext";
import { Child00 } from "../_children";
import type { RelayData } from "../_models/relayContext";

export default component$(() => {
	const relayDataSignal = useSignal<RelayData>(0);
	useContextProvider(relayData, relayDataSignal);

	return <Child00 />;
});
