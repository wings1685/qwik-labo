import { component$ } from "@qwik.dev/core";
import { Receipt, ReactiveTypes, Parent } from "./_parts";
import "./Page.sass";

export default component$(() => {
	return (
		<div id="performance">
			<Receipt />
			<ReactiveTypes />
			<Parent />
		</div>
	)
});
