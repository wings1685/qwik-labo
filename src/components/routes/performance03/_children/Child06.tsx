import { component$ } from "@builder.io/qwik";
import { Child07 } from "./";
import type { RelayProps } from "../_models/relayContext";

export default component$((props: RelayProps) => {
	return <Child07 relay={ props.relay } setRelay={ props.setRelay } />;
});
