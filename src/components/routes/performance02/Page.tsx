import { component$ } from "@builder.io/qwik";
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
