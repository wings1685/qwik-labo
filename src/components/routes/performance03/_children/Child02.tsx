import { component$ } from "@builder.io/qwik";
import { Child03 } from "./";
import type { RelayProps } from "../_models/relayContext";

export default component$((props: RelayProps) => {
	return <Child03 relay={ props.relay } setRelay={ props.setRelay } />;
});
