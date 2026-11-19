import { component$ } from "@builder.io/qwik";
import Page from "@/components/routes/events/Page";
import type { DocumentHead } from "@builder.io/qwik-city";

export const head: DocumentHead = {
	title: 'Events Test',
};

export default component$(() => {
	return <Page />;
});
