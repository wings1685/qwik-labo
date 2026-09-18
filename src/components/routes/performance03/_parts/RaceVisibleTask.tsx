/* eslint-disable qwik/no-use-visible-task */
import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { recordStart, recordFinished } from "../_models/performance";
import type { RaceProps } from "../_models/types";

export default component$((props: RaceProps) => {
	const state01 = useSignal(0);
	const state02 = useSignal(0);
	const state03 = useSignal(0);
	const state04 = useSignal(0);
	const state05 = useSignal(0);
	const state06 = useSignal(0);
	const state07 = useSignal(0);
	const state08 = useSignal(0);
	const state09 = useSignal(0);
	const state10 = useSignal(0);

	useVisibleTask$(({ track }) => {
		track(() => props.start);

		if (!props.start) return;

		recordStart('RaceVisibleTaskState');
		state01.value++;
	});
	useVisibleTask$(({ track }) => {
		track(() => state01.value);

		if (!props.start || !state01.value) return;

		state02.value++;
	});
	useVisibleTask$(({ track }) => {
		track(() => state02.value);

		if (!props.start || !state02.value) return;

		state03.value++;
	});
	useVisibleTask$(({ track }) => {
		track(() => state03.value);

		if (!props.start || !state03.value) return;

		state04.value++;
	});
	useVisibleTask$(({ track }) => {
		track(() => state04.value);

		if (!props.start || !state04.value) return;

		state05.value++;
	});
	useVisibleTask$(({ track }) => {
		track(() => state05.value);

		if (!props.start || !state05.value) return;

		state06.value++;
	});
	useVisibleTask$(({ track }) => {
		track(() => state06.value);

		if (!props.start || !state06.value) return;

		state07.value++;
	});
	useVisibleTask$(({ track }) => {
		track(() => state07.value);

		if (!props.start || !state07.value) return;

		state08.value++;
	});
	useVisibleTask$(({ track }) => {
		track(() => state08.value);

		if (!props.start || !state08.value) return;

		state09.value++;
	});
	useVisibleTask$(({ track }) => {
		track(() => state09.value);

		if (!props.start || !state09.value) return;

		state10.value++;
	});
	useVisibleTask$(({ track }) => {
		track(() => state10.value);

		if (!props.start || !state10.value) return;

		recordFinished('RaceVisibleTaskState');
	});

	return null;
});
