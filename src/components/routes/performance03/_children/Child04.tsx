import { component$ } from "@qwik.dev/core";
import { Child05 } from "./";
import type { RelayProps } from "../_models/relayContext";

export default component$((props: RelayProps) => {
	return <Child05 relay={ props.relay } setRelay={ props.setRelay } />;
});
