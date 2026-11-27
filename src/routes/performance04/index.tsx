import { component$ } from "@qwik.dev/core";
import Page from "@/components/routes/performance04/Page";
import type { DocumentHead } from "@qwik.dev/router";

export const head: DocumentHead = () => ({
	title: 'Performance Test Final',
});

export default component$(() => {
	return (
		<Page />
	);
});
