import { component$ } from "@builder.io/qwik";
import { Child09 } from "./";
import type { RelayProps } from "../_models/relayContext";

export default component$((props: RelayProps) => {
	return <Child09 relay={ props.relay } setRelay={ props.setRelay } />;
});
