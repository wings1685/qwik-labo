import { component$, useTask$ } from "@builder.io/qwik";
import { recordFinished } from "../_models/performance";
import type { Records } from "../_models/performance";

type OnMountProps = {
	start: number;
	target: Records;
};

export default component$((props: OnMountProps) => {
	useTask$(({ track }) => {
		track(() => props.start);

		recordFinished(props.target);
	});
});
