import { createContextId } from "@qwik.dev/core";
import type { QRL, Signal } from "@qwik.dev/core";

export type RelayData = number;
export type RelaySetter = QRL<(_: RelayData) => void>;
export type RelayProps = {
	relay: RelayData;
	setRelay: RelaySetter;
};
export const relayData = createContextId<Signal<RelayData>>('relayData03');
