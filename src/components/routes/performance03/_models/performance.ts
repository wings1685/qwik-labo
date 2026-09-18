export const records = {
	RelaySetter: {
		start: 0,
		finished: 0,
	},
	RelayContext: {
		start: 0,
		finished: 0,
	},
	RaceTaskState: {
		start: 0,
		finished: 0,
	},
	RaceComputedState: {
		start: 0,
		finished: 0,
	},
	RaceVisibleTaskState: {
		start: 0,
		finished: 0,
	},
	QuantumContext: {
		start: 0,
		finished: 0,
	},
};
export type Records = keyof typeof records;
const now = () => performance.now();
export const recordStart = (target: Records) => {
	records[target].start = now();
};
export const recordFinished = (target: Records, name?: string) => {
	if (records[target].start === 0) return;

	records[target].finished = now();
	const diff = records[target].finished - records[target].start;
	console.log(`${name ?? target}: ${diff} ミリ秒`);
};
export const loopTotal = 5;
