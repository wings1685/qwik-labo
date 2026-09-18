import { $ } from "@builder.io/qwik";
import type { Signal } from "@builder.io/qwik";
import type { Store } from "solid-js/store";

export const provideSignalContext = <T>(context: Signal<T>) => ({
	get signal() { return context },
	set: $((value: T) => context.value = value),
});

export const provideStoreContext = <T extends object>(context: Store<T>) => ({
	get store() { return context },
	set: $((updater: Partial<T> | ((state: T) => void)) => {
		if (typeof updater === 'function') {
			updater(context);
		} else {
			for (const key in context) {
				delete context[key];
			}
			Object.assign(context, updater);
		}
	}),
});
