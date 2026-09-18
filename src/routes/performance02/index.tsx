import { component$ } from "@builder.io/qwik";
import Page from "@/components/routes/performance02/Page";
import type { DocumentHead } from "@builder.io/qwik-city";

export const head: DocumentHead = {
	title: 'Performance Test 02',
};

export default component$(() => {
	return (
		<Page />
	);
});
