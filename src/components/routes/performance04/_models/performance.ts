export const records = {
	Race: {
		start: 0,
		finished: 0,
	},
	Effect: {
		start: 0,
		finished: 0,
	},
	Props: {
		start: 0,
		finished: 0,
	},
	Context: {
		start: 0,
		finished: 0,
	},
	Memo: {
		start: 0,
		finished: 0,
	},
	Store: {
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
export const log = (text: string) => {
	console.log(`${text} 通過！`);
};
export const logEffect = () => log('Effect 10 連鎖');
export const logProps = () => log('Props 10 連鎖');
export const logContext = () => log('Context');
export const logMemo = () => log('Memo 10 連鎖');
export const logStore = () => log('Store 10 連鎖');
