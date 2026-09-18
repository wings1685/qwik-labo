import { $, component$, useContextProvider, useSignal } from "@builder.io/qwik";
import { recordStart } from "../_models/performance";
import { raceIdData } from "../_models/raceIdContext";
import { Effect, Parent, Memo, QuantumCircuit } from "./";
import type { RaceId } from "../_models/raceIdContext";

export default component$(() => {
	const raceIdDataSignal = useSignal<RaceId>(null);
	useContextProvider(raceIdData, raceIdDataSignal);

	const handleClick$ = $(() => {
		recordStart('Race');
		raceIdDataSignal.value = 'Effect';
	});

	return (
		<>
			<fieldset>
				<button onClick$={ () => handleClick$() }>レーススタート！</button>
			</fieldset>
			<Effect />
			<Parent />
			<Memo />
			<QuantumCircuit />
		</>
	)
});
