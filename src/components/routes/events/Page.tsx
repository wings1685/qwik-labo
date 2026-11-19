/* eslint-disable qwik/no-use-visible-task */
import { $, component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { recordFinished, recordStart } from "./_models/performance";

export default component$(() => {
	const elWhole = useSignal<HTMLButtonElement>();
	const handleWhole$ = $(() => {
		const whole10 = () => { recordFinished('Whole'); };
		const whole09 = () => { whole10(); };
		const whole08 = () => { whole09(); };
		const whole07 = () => { whole08(); };
		const whole06 = () => { whole07(); };
		const whole05 = () => { whole06(); };
		const whole04 = () => { whole05(); };
		const whole03 = () => { whole04(); };
		const whole02 = () => { whole03(); };
		const whole01 = () => { whole02(); };
		whole01();
	});

	const elWholePrepared = useSignal<HTMLButtonElement>();
	const handleWholePrepared$ = $(() => {
		const wholePrepared10 = () => { recordFinished('WholePrepared'); };
		const wholePrepared09 = () => { wholePrepared10(); };
		const wholePrepared08 = () => { wholePrepared09(); };
		const wholePrepared07 = () => { wholePrepared08(); };
		const wholePrepared06 = () => { wholePrepared07(); };
		const wholePrepared05 = () => { wholePrepared06(); };
		const wholePrepared04 = () => { wholePrepared05(); };
		const wholePrepared03 = () => { wholePrepared04(); };
		const wholePrepared02 = () => { wholePrepared03(); };
		const wholePrepared01 = () => { wholePrepared02(); };
		wholePrepared01();
	});
	useVisibleTask$(async () => { await handleWholePrepared$(); });

	const elEntrance = useSignal<HTMLButtonElement>();
	const entrance$ = $(() => {
		const entrance10 = () => { recordFinished('Entrance'); };
		const entrance09 = () => { entrance10(); };
		const entrance08 = () => { entrance09(); };
		const entrance07 = () => { entrance08(); };
		const entrance06 = () => { entrance07(); };
		const entrance05 = () => { entrance06(); };
		const entrance04 = () => { entrance05(); };
		const entrance03 = () => { entrance04(); };
		const entrance02 = () => { entrance03(); };
		const entrance01 = () => { entrance02(); };
		entrance01();
	});
	const handleEntrance$ = $(async () => { await entrance$(); });

	const elEntrancePrepared = useSignal<HTMLButtonElement>();
	const entrancePrepared$ = $(() => {
		const entrancePrepared10 = () => { recordFinished('EntrancePrepared'); };
		const entrancePrepared09 = () => { entrancePrepared10(); };
		const entrancePrepared08 = () => { entrancePrepared09(); };
		const entrancePrepared07 = () => { entrancePrepared08(); };
		const entrancePrepared06 = () => { entrancePrepared07(); };
		const entrancePrepared05 = () => { entrancePrepared06(); };
		const entrancePrepared04 = () => { entrancePrepared05(); };
		const entrancePrepared03 = () => { entrancePrepared04(); };
		const entrancePrepared02 = () => { entrancePrepared03(); };
		const entrancePrepared01 = () => { entrancePrepared02(); };
		entrancePrepared01();
	});
	const handleEntrancePrepared$ = $(async () => { await entrancePrepared$(); });
	useVisibleTask$(async () => { await handleEntrancePrepared$(); });

	const elDivision = useSignal<HTMLButtonElement>();
	const division10$ = $(async () => { recordFinished('Division'); });
	const division09$ = $(async () => { await division10$(); });
	const division08$ = $(async () => { await division09$(); });
	const division07$ = $(async () => { await division08$(); });
	const division06$ = $(async () => { await division07$(); });
	const division05$ = $(async () => { await division06$(); });
	const division04$ = $(async () => { await division05$(); });
	const division03$ = $(async () => { await division04$(); });
	const division02$ = $(async () => { await division03$(); });
	const division01$ = $(async () => { await division02$(); });
	const handleDivision$ = $(async () => { await division01$(); });

	const elDivisionPrepared = useSignal<HTMLButtonElement>();
	const divisionPrepared10$ = $(async () => { recordFinished('DivisionPrepared'); });
	const divisionPrepared09$ = $(async () => { await divisionPrepared10$(); });
	const divisionPrepared08$ = $(async () => { await divisionPrepared09$(); });
	const divisionPrepared07$ = $(async () => { await divisionPrepared08$(); });
	const divisionPrepared06$ = $(async () => { await divisionPrepared07$(); });
	const divisionPrepared05$ = $(async () => { await divisionPrepared06$(); });
	const divisionPrepared04$ = $(async () => { await divisionPrepared05$(); });
	const divisionPrepared03$ = $(async () => { await divisionPrepared04$(); });
	const divisionPrepared02$ = $(async () => { await divisionPrepared03$(); });
	const divisionPrepared01$ = $(async () => { await divisionPrepared02$(); });
	const handleDivisionPrepared$ = $(async () => { await divisionPrepared01$(); });
	useVisibleTask$(async () => { await handleDivisionPrepared$(); });

	const handleStart$ = $(() => {
		if (!elWhole.value || !elWholePrepared.value) return;
		if (!elEntrance.value || !elEntrancePrepared.value) return;
		if (!elDivision.value || !elDivisionPrepared.value) return;

		recordStart('Whole');
		elWhole.value.click();

		recordStart('WholePrepared');
		elWholePrepared.value.click();

		recordStart('Entrance');
		elEntrance.value.click();

		recordStart('EntrancePrepared');
		elEntrancePrepared.value.click();

		recordStart('Division');
		elDivision.value.click();

		recordStart('DivisionPrepared');
		elDivisionPrepared.value.click();
	});

	return (
		<div id="qwik_events">
			<fieldset>
				<button onClick$={ handleStart$ }>Start!</button>
			</fieldset>
			<fieldset>
				<button ref={ el => elWhole.value = el } onClick$={ handleWhole$ }>Whole</button>
			</fieldset>
			<fieldset>
				<button ref={ el => elWholePrepared.value = el } onClick$={ handleWholePrepared$ }>Whole Prepared</button>
			</fieldset>
			<fieldset>
				<button ref={ el => elEntrance.value = el } onClick$={ handleEntrance$ }>Entrance</button>
			</fieldset>
			<fieldset>
				<button ref={ el => elEntrancePrepared.value = el } onClick$={ handleEntrancePrepared$ }>Entrance Prepared</button>
			</fieldset>
			<fieldset>
				<button ref={ el => elDivision.value = el } onClick$={ handleDivision$ }>Division</button>
			</fieldset>
			<fieldset>
				<button ref={ el => elDivisionPrepared.value = el } onClick$={ handleDivisionPrepared$ }>Division Prepared</button>
			</fieldset>
		</div>
	)
});
