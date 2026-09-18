import { createContextId } from "@builder.io/qwik";
import type { Signal } from "@builder.io/qwik";

export type AtId = string;
export const atId = createContextId<Signal<AtId>>('atId');

export type StartHydration = number;
export const startHydration = createContextId<Signal<StartHydration>>('startHydration');
