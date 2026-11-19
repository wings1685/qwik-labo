export const records = {
	Whole: {
		start: 0,
		finished: 0,
	},
	WholePrepared: {
		start: 0,
		finished: 0,
	},
	Entrance: {
		start: 0,
		finished: 0,
	},
	EntrancePrepared: {
		start: 0,
		finished: 0,
	},
	Division: {
		start: 0,
		finished: 0,
	},
	DivisionPrepared: {
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
