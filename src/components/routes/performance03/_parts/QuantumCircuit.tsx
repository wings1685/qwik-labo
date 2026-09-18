import { component$, useContextProvider, useSignal, useTask$ } from "@builder.io/qwik";
import { Quantum00, Quantum01, Quantum02, Quantum03, Quantum04, Quantum05, Quantum06, Quantum07, Quantum08, Quantum09, Quantum10 } from "../_quantumContexts";
import { quantumData } from "../_models/quantumContext";
import type { Quantum } from "../_models/quantumContext";
import type { RaceProps } from "../_models/types";

export default component$((props: RaceProps) => {
	const quantumStart = useSignal<Quantum>(0);

	const quantum01 = useSignal<Quantum>(0);
	const quantum02 = useSignal<Quantum>(0);
	const quantum03 = useSignal<Quantum>(0);
	const quantum04 = useSignal<Quantum>(0);
	const quantum05 = useSignal<Quantum>(0);
	const quantum06 = useSignal<Quantum>(0);
	const quantum07 = useSignal<Quantum>(0);
	const quantum08 = useSignal<Quantum>(0);
	const quantum09 = useSignal<Quantum>(0);
	const quantum10 = useSignal<Quantum>(0);

	useContextProvider(quantumData, {
		quantumStart: quantumStart,

		quantum01: quantum01,
		quantum02: quantum02,
		quantum03: quantum03,
		quantum04: quantum04,
		quantum05: quantum05,
		quantum06: quantum06,
		quantum07: quantum07,
		quantum08: quantum08,
		quantum09: quantum09,
		quantum10: quantum10,
	});

	useTask$(({ track }) => {
		track(() => props.start);

		if (!props.start) return;

		quantumStart.value = props.start;
	});

	return (
		<>
			<Quantum00 />
			<Quantum01 />
			<Quantum02 />
			<Quantum03 />
			<Quantum04 />
			<Quantum05 />
			<Quantum06 />
			<Quantum07 />
			<Quantum08 />
			<Quantum09 />
			<Quantum10 />
		</>
	)
});
