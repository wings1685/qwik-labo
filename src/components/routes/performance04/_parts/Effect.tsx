/* eslint-disable qwik/no-use-visible-task */
import { component$, useContext, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { recordStart, recordFinished, logEffect } from "../_models/performance";
import { raceIdData } from "../_models/raceIdContext";

export default component$(() =>  {
	const raceIdDataContext = useContext(raceIdData);
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

	const num = { value: 0 };

	useVisibleTask$(({ track }) => {
		track(() => raceIdDataContext.value);

		if (raceIdDataContext.value !== 'Effect') return;

		recordStart('Effect');
		state01.value = num.value + 1;
	});
	useVisibleTask$(({ track }) => {
		track(() => state01.value);

		if (!state01.value) return;

		logEffect();
		state02.value = state01.value;
	});
	useVisibleTask$(({ track }) => {
		track(() => state02.value);

		if (!state02.value) return;

		logEffect();
		state03.value = state02.value;
	});
	useVisibleTask$(({ track }) => {
		track(() => state03.value);

		if (!state03.value) return;

		logEffect();
		state04.value = state03.value;
	});
	useVisibleTask$(({ track }) => {
		track(() => state04.value);

		if (!state04.value) return;

		logEffect();
		state05.value = state04.value;
	});
	useVisibleTask$(({ track }) => {
		track(() => state05.value);

		if (!state05.value) return;

		logEffect();
		state06.value = state05.value;
	});
	useVisibleTask$(({ track }) => {
		track(() => state06.value);

		if (!state06.value) return;

		logEffect();
		state07.value = state06.value;
	});
	useVisibleTask$(({ track }) => {
		track(() => state07.value);

		if (!state07.value) return;

		logEffect();
		state08.value = state07.value;
	});
	useVisibleTask$(({ track }) => {
		track(() => state08.value);

		if (!state08.value) return;

		logEffect();
		state09.value = state08.value;
	});
	useVisibleTask$(({ track }) => {
		track(() => state09.value);

		if (!state09.value) return;

		logEffect();
		state10.value = state09.value;
	});
	useVisibleTask$(({ track }) => {
		track(() => state10.value);

		if (!state10.value) return;

		logEffect();
		recordFinished('Effect');
		num.value++;
		raceIdDataContext.value = 'Props';
	});

	return null;
});
