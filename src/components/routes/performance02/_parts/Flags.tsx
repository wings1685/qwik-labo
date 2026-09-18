import { component$, useStore, useTask$ } from "@builder.io/qwik";
import { recordStart, recordFinished } from "../_models/performance";
import type { ReactiveTypeProps } from "../_models/types";

export default component$((props: ReactiveTypeProps) => {
	const reactive = useStore({
		dummy01a: 0,
		dummy01b: 0,
		dummy01c: 0,
		dummy01d: 0,
		dummy01e: 0,
		dummy01f: 0,
		dummy01g: 0,
		dummy01h: 0,
		dummy01i: 0,
		dummy01j: 0,
		dummy01k: 0,
		dummy01l: 0,
		dummy01m: 0,
		dummy01n: 0,
		dummy01o: 0,
		dummy01p: 0,
		dummy01q: 0,
		dummy01r: 0,
		dummy01s: 0,
		dummy01t: 0,
		dummy01u: 0,
		dummy01v: 0,
		dummy01w: 0,
		dummy01x: 0,
		dummy01y: 0,
		active01z: 0,
	});

	useTask$(({ track }) => {
		track(() => props.start > 0);

		recordStart('Flags');
		reactive.active01z = props.start;
	});

	useTask$(({ track }) => {
		track(() => reactive.active01z > 0);

		recordFinished('Flags');
	});

	return null;
});
