export const records = {
	Receipt: {
		start: 0,
		finished: 0,
	},
	Primitive: {
		start: 0,
		finished: 0,
	},
	NestObject: {
		start: 0,
		finished: 0,
	},
	Flags: {
		start: 0,
		finished: 0,
	},
	RelayProps: {
		start: 0,
		finished: 0,
	},
	RelayContext: {
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
