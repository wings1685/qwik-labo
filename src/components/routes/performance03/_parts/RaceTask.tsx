import { component$, useSignal, useTask$ } from "@builder.io/qwik";
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

	useTask$(({ track }) => {
		track(() => props.start);

		if (!props.start) return;

		recordStart('RaceTaskState');
		state01.value++;
	});
	useTask$(({ track }) => {
		track(() => state01.value);

		if (!state01.value) return;

		state02.value++;
	});
	useTask$(({ track }) => {
		track(() => state02.value);

		if (!state02.value) return;

		state03.value++;
	});
	useTask$(({ track }) => {
		track(() => state03.value);

		if (!state03.value) return;

		state04.value++;
	});
	useTask$(({ track }) => {
		track(() => state04.value);

		if (!state04.value) return;

		state05.value++;
	});
	useTask$(({ track }) => {
		track(() => state05.value);

		if (!state05.value) return;

		state06.value++;
	});
	useTask$(({ track }) => {
		track(() => state06.value);

		if (!state06.value) return;

		state07.value++;
	});
	useTask$(({ track }) => {
		track(() => state07.value);

		if (!state07.value) return;

		state08.value++;
	});
	useTask$(({ track }) => {
		track(() => state08.value);

		if (!state08.value) return;

		state09.value++;
	});
	useTask$(({ track }) => {
		track(() => state09.value);

		if (!state09.value) return;

		state10.value++;
	});
	useTask$(({ track }) => {
		track(() => state10.value);

		if (!state10.value) return;

		recordFinished('RaceTaskState');
	});

	return null;
});
