import { component$ } from "@builder.io/qwik";
import { Circuit, Parent, QuantumStart } from "./_parts";
import "./Page.sass";

export default component$(() => {
	return (
		<div id="performance">
			<Parent />
			<Circuit />
			<QuantumStart />
		</div>
	)
});
