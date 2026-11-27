import { component$ } from "@qwik.dev/core";
import Page from "@/components/routes/performance03/Page";
import type { DocumentHead } from "@qwik.dev/router";

export const head: DocumentHead = () => ({
	title: 'Performance Test 03',
});

export default component$(() => {
	return (
		<Page />
	);
});
