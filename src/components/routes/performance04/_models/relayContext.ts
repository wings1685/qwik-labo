import { createContextId } from "@builder.io/qwik";
import type { QRL, Signal } from "@builder.io/qwik";

export type RelayData = number;
export type RelaySetter = QRL<(_: RelayData) => void>;
export type RelayProps = {
	relay: RelayData;
};
export const relayData = createContextId<Signal<RelayData>>('relayData04');
