import { component$ } from "@builder.io/qwik";
import Page from "@/components/routes/performance04/Page";
import type { DocumentHead } from "@builder.io/qwik-city";

export const head: DocumentHead = {
	title: 'Performance Test Final',
};

export default component$(() => {
	return (
		<Page />
	);
});
