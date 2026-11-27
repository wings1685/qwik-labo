import { component$ } from "@qwik.dev/core";
import { Child06 } from "./";
import type { RelayProps } from "../_models/relayContext";

export default component$((props: RelayProps) => {
	return <Child06 relay={ props.relay } setRelay={ props.setRelay } />;
});
