import { component$ } from "@qwik.dev/core";
import Page from "@/components/routes/events/Page";
import type { DocumentHead } from "@qwik.dev/router";

export const head: DocumentHead = () => ({
	title: 'Events Test',
});

export default component$(() => {
	return <Page />;
});
