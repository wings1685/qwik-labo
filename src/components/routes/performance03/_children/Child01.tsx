import { component$ } from "@qwik.dev/core";
import { Child02 } from "./";
import type { RelayProps } from "../_models/relayContext";

export default component$((props: RelayProps) => {
	return <Child02 relay={ props.relay } setRelay={ props.setRelay } />;
});
