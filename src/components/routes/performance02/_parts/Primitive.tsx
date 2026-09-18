import { component$, useSignal, useTask$ } from "@builder.io/qwik";
import { recordStart, recordFinished } from "../_models/performance";
import type { ReactiveTypeProps } from "../_models/types";

export default component$((props: ReactiveTypeProps) => {
	const reactive = useSignal(0);

	useTask$(({ track }) => {
		track(() => props.start > 0);

		recordStart('Primitive');
		reactive.value = props.start;
	});

	useTask$(({ track }) => {
		track(() => reactive.value > 0);

		recordFinished('Primitive');
	});

	return null;
});
