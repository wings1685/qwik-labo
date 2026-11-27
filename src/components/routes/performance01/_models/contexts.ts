import { createContextId } from "@qwik.dev/core";
import type { Signal } from "@qwik.dev/core";

export type AtId = string;
export const atId = createContextId<Signal<AtId>>('atId');

export type StartHydration = number;
export const startHydration = createContextId<Signal<StartHydration>>('startHydration');
