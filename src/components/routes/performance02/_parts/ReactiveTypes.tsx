import { $, component$, useSignal } from "@builder.io/qwik";
import { Flags, NestObject, Primitive } from "./";

export default component$(() => {
	const start = useSignal(0);

	const handleClick$ = $(() => {
		start.value++;
	});

	return (
		<>
			<fieldset>
				<button onClick$={ handleClick$ }>リアクティブ構造差の計測開始</button>
			</fieldset>
			<Primitive start={ start.value } />
			<NestObject start={ start.value } />
			<Flags start={ start.value } />
		</>
	)
});
