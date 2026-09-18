import { component$, useContextProvider, useSignal } from "@builder.io/qwik";
import { Quantum00, Quantum01, Quantum02, Quantum03, Quantum04, Quantum05, Quantum06, Quantum07, Quantum08, Quantum09, Quantum10 } from "../_quantumContexts";
import { quantumData } from "../_models/quantumContext";
import type { Quantum } from "../_models/quantumContext";

export default component$(() => {
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
