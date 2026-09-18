import { component$ } from "@builder.io/qwik";
import { Child09 } from "./";
import type { RelayProps } from "../_models/relayContext";

export default component$((props: RelayProps) => {
	return <Child09 relay={ props.relay } />;
	// return (
	// 	<>
	// 		<Child09 relay={ props.relay } />
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
