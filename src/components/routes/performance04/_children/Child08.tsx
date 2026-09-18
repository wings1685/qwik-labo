import { component$, useComputed$ } from "@builder.io/qwik";
import { logProps } from "../_models/performance";
import { Child09 } from "./";
import type { RelayProps } from "../_models/relayContext";

export default component$((props: RelayProps) => {
	const relayData = useComputed$(() => {
		if (!props.relay) return 0;

		logProps();
		return props.relay;
	});

	return <Child09 relay={ relayData.value } />;
});
