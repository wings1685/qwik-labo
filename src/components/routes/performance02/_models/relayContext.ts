import { createContextId } from "@qwik.dev/core";
import type { Signal } from "@qwik.dev/core";

export type RelayData = number;
export type RelayProps = {
	relay: RelayData;
};
export const relayData = createContextId<Signal<RelayData>>('relayData02');
