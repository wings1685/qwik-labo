import { createContextId } from "@builder.io/qwik";
import type { Signal } from "@builder.io/qwik";

export type Quantum = number;
export type QuantumData = {
	quantumStart: Signal<Quantum>;

	quantum01: Signal<Quantum>;
	quantum02: Signal<Quantum>;
	quantum03: Signal<Quantum>;
	quantum04: Signal<Quantum>;
	quantum05: Signal<Quantum>;
	quantum06: Signal<Quantum>;
	quantum07: Signal<Quantum>;
	quantum08: Signal<Quantum>;
	quantum09: Signal<Quantum>;
	quantum10: Signal<Quantum>;
};
export const quantumData = createContextId<QuantumData>('quantumData03');
