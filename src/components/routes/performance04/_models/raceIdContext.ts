import { createContextId } from "@builder.io/qwik";
import type { Signal } from "@builder.io/qwik";

export type RaceId = 'Effect' | 'Props' | 'Context' | 'Memo' | 'Store' | null;
export const raceIdData = createContextId<Signal<RaceId>>('raceIdData');
