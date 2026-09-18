/* eslint-disable qwik/no-use-visible-task */
import { $, component$, Slot, useContext, useVisibleTask$ } from "@builder.io/qwik";
import { provideSignalContext } from "@/_global/contexts";
import { atId } from "../_models/contexts";
import { recordStart } from "../_models/performance";

type Props = {
	to: string;
};

export default component$((props: Props) => {
	const atIdContext = provideSignalContext(useContext(atId));

	const handleStart$ = $(() => {
		atIdContext.set(props.to);
	});
	const handleClick$ = $((isAction?: boolean) => {
		if (!isAction) return;

		recordStart('GlobalSignal');
		handleStart$();
	});
	useVisibleTask$(() => {
		handleClick$();
	});

	return (
		<button onClick$={ () => handleClick$(true) }>
			<Slot />
		</button>
	)
});
