import { component$ } from "@builder.io/qwik";
import { Child08 } from "./";
import type { RelayProps } from "../_models/relayContext";

export default component$((props: RelayProps) => {
	return <Child08 relay={ props.relay } setRelay={ props.setRelay } />;
});
