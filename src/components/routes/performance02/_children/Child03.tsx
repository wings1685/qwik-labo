import { component$ } from "@builder.io/qwik";
import { Child04 } from "./";
import type { RelayProps } from "../_models/relayContext";

export default component$((props: RelayProps) => {
	return <Child04 relay={ props.relay } />;
	// return (
	// 	<>
	// 		<Child04 relay={ props.relay } />
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
