import { component$ } from "@qwik.dev/core";
import { Child04 } from "./";
import type { RelayProps } from "../_models/relayContext";

export default component$((props: RelayProps) => {
	return <Child04 relay={ props.relay } setRelay={ props.setRelay } />;
});
