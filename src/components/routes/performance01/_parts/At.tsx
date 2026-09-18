import { component$, useContext, useSignal, useTask$ } from "@builder.io/qwik";
import { provideSignalContext } from "@/_global/contexts";
import { atId, startHydration } from "../_models/contexts";
import { recordFinished, records, recordStart } from "../_models/performance";

type Props = {
	id: string;
};

export default component$((props: Props) => {
	const atIdContext = provideSignalContext(useContext(atId));
	const startHydrationContext = provideSignalContext(useContext(startHydration));

	const el = useSignal<HTMLSpanElement>();

	useTask$(({ track }) => {
		track(() => atIdContext.signal.value);

		if (!el || !el.value || props.id !== atIdContext.signal.value) return;

		el.value.scrollIntoView({ behavior: 'smooth' });
		recordFinished('GlobalSignal');
		atIdContext.set('');
		recordStart('Hydration');
		startHydrationContext.set(records.Hydration.start);
	});

	return (
		<span ref={ el } id={ `at_${props.id}` } class="invisible_target" />
	)
});
