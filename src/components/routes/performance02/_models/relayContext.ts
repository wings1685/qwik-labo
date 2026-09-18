import { createContextId } from "@builder.io/qwik";
import type { Signal } from "@builder.io/qwik";

export type RelayData = number;
export type RelayProps = {
	relay: RelayData;
};
export const relayData = createContextId<Signal<RelayData>>('relayData02');
