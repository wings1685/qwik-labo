import { component$ } from "@builder.io/qwik";
import { Child02 } from "./";
import type { RelayProps } from "../_models/relayContext";

export default component$((props: RelayProps) => {
	return <Child02 relay={ props.relay } />;
	// return (
	// 	<>
	// 		<Child02 relay={ props.relay } />
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
