import { component$ } from "@qwik.dev/core";
import Page from "@/components/routes/performance01/Page";
import type { DocumentHead } from "@qwik.dev/router";

export const head: DocumentHead = () => ({
	title: 'Performance Test 01',
});

export default component$(() => {
	return (
		<Page />
	);
});
