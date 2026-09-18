import { component$, useContextProvider, useSignal } from "@builder.io/qwik";
import { atId, startHydration } from "./_models/contexts";
import { Anchor, At, Pics } from "./_parts";
import type { AtId, StartHydration } from "./_models/contexts";
import "./Page.sass";

export default component$(() => {
	const atIdSignal = useSignal<AtId>('');
	useContextProvider(atId, atIdSignal);
	const startHydrationSignal = useSignal<StartHydration>(0);
	useContextProvider(startHydration, startHydrationSignal);

	return (
		<div id="performance">
			<section>
				<Anchor to="pics">スクロールします</Anchor>
			</section>
			<At id="pics" />
			<Pics />
		</div>
	)
});
