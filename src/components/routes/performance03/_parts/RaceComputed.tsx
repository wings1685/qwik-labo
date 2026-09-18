import { component$, useComputed$ } from "@builder.io/qwik";
import { recordStart, recordFinished } from "../_models/performance";
import type { RaceProps } from "../_models/types";

export default component$((props: RaceProps) => {
	const state01 = useComputed$(() => {
		if (!props.start) return;

		recordStart('RaceComputedState');
		return props.start + 1;
	});
	const state02 = useComputed$(() => {
		if (!state01.value) return;

		return state01.value;
	});
	const state03 = useComputed$(() => {
		if (!state02.value) return;

		return state02.value;
	});
	const state04 = useComputed$(() => {
		if (!state03.value) return;

		return state03.value;
	});
	const state05 = useComputed$(() => {
		if (!state04.value) return;

		return state04.value;
	});
	const state06 = useComputed$(() => {
		if (!state05.value) return;

		return state05.value;
	});
	const state07 = useComputed$(() => {
		if (!state06.value) return;

		return state06.value;
	});
	const state08 = useComputed$(() => {
		if (!state07.value) return;

		return state07.value;
	});
	const state09 = useComputed$(() => {
		if (!state08.value) return;

		return state08.value;
	});
	const state10 = useComputed$(() => {
		if (!state09.value) return;

		return state09.value;
	});
	useComputed$(() => {
		if (!state10.value) return;

		recordFinished('RaceComputedState');
	});

	return null;
});
