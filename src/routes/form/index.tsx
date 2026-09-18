import { component$ } from "@builder.io/qwik";
import Page from "@/components/routes/form/Page";
import type { DocumentHead } from "@builder.io/qwik-city";

export const head: DocumentHead = {
	title: 'Form Test',
};

export default component$(() => {
	return (
		<Page />
	);
});
