/* eslint-disable qwik/no-use-visible-task */
import { component$, useComputed$, useContext, useVisibleTask$ } from "@builder.io/qwik";
import { recordStart, recordFinished, logMemo } from "../_models/performance";
import { raceIdData } from "../_models/raceIdContext";

export default component$(() => {
	const raceIdDataContext = useContext(raceIdData);

	const num = { value: 0 };

	const state01 = useComputed$(() => {
		if (raceIdDataContext.value !== 'Memo') return 0;

		recordStart('Memo');
		return num.value + 1;
	});
	const state02 = useComputed$(() => {
		if (!state01.value) return;

		logMemo();
		return state01.value;
	});
	const state03 = useComputed$(() => {
		if (!state02.value) return;

		logMemo();
		return state02.value;
	});
	const state04 = useComputed$(() => {
		if (!state03.value) return;

		logMemo();
		return state03.value;
	});
	const state05 = useComputed$(() => {
		if (!state04.value) return;

		logMemo();
		return state04.value;
	});
	const state06 = useComputed$(() => {
		if (!state05.value) return;

		logMemo();
		return state05.value;
	});
	const state07 = useComputed$(() => {
		if (!state06.value) return;

		logMemo();
		return state06.value;
	});
	const state08 = useComputed$(() => {
		if (!state07.value) return;

		logMemo();
		return state07.value;
	});
	const state09 = useComputed$(() => {
		if (!state08.value) return;

		logMemo();
		return state08.value;
	});
	const state10 = useComputed$(() => {
		if (!state09.value) return;

		logMemo();
		return state09.value;
	});
	const finished = useComputed$(() => {
		if (!state10.value) return;

		logMemo();
		recordFinished('Memo');
		return state10.value;
	});
	useVisibleTask$(({ track }) => {
		track(() => finished.value);

		if (!finished.value) return;

		num.value = finished.value;
		raceIdDataContext.value = 'Store';
	});

	return null;
});
