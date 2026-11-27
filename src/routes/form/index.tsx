import { component$ } from "@qwik.dev/core";
import Page from "@/components/routes/form/Page";
import type { DocumentHead } from "@qwik.dev/router";

export const head: DocumentHead = () => ({
	title: 'Form Test',
});

export default component$(() => {
	return (
		<Page />
	);
});
