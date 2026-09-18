import { component$, useContext, useTask$ } from "@builder.io/qwik";
import { recordFinished } from "../_models/performance";
import { relayData } from "../_models/relayContext";
import type { RelayProps } from "../_models/relayContext";

export default component$((props: RelayProps) => {
	const relayDataContext = useContext(relayData);

	useTask$(({ track }) => {
		track(() => props.relay);

		recordFinished('RelayProps');
	});

	useTask$(({ track }) => {
		track(() => relayDataContext.value);

		recordFinished('RelayContext');
	});

	return null;
	// return (
	// 	<>
	// 		<p>{ props.relay }</p>
	// 		<p>{ props.relay }</p>
	// 		<p>{ props.relay }</p>
	// 		<p>{ props.relay }</p>
	// 		<p>{ props.relay }</p>
	// 		<p>{ props.relay }</p>
	// 		<p>{ props.relay }</p>
	// 		<p>{ props.relay }</p>
	// 		<p>{ props.relay }</p>
	// 		<p>{ props.relay }</p>
	// 	</>
	// );
});
