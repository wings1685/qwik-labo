import { component$ } from "@qwik.dev/core";
import Page from "@/components/routes/performance02/Page";
import type { DocumentHead } from "@qwik.dev/router";

export const head: DocumentHead = () => ({
	title: 'Performance Test 02',
});

export default component$(() => {
	return (
		<Page />
	);
});
