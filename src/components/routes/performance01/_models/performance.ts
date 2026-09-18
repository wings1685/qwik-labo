export const records = {
	GlobalSignal: {
		start: 0,
		finished: 0,
	},
	Hydration: {
		start: 0,
		finished: 0,
	},
	ReRender: {
		start: 0,
		finished: 0,
	},
};
export type Records = keyof typeof records;
const now = () => performance.now();
export const recordStart = (target: Records) => {
	records[target].start = now();
};
export const recordFinished = (target: Records) => {
	if (records[target].start === 0) return;

	records[target].finished = now();
	const diff = records[target].finished - records[target].start;
	console.log(`${target}: ${diff} ミリ秒`);
};

export const picKeys = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'] as const;
