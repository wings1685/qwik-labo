import { component$ } from "@qwik.dev/core";
import { Start } from "./_parts";
import "./Page.sass";

export default component$(() => {
	return (
		<div id="performance">
			<Start />
		</div>
	)
});
