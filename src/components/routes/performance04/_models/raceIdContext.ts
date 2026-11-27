import { createContextId } from "@qwik.dev/core";
import type { Signal } from "@qwik.dev/core";

export type RaceId = 'Effect' | 'Props' | 'Context' | 'Memo' | 'Store' | null;
export const raceIdData = createContextId<Signal<RaceId>>('raceIdData');
