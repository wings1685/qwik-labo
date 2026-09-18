import * as v from "valibot";

export const checkboxItems = ['check01', 'check02', 'check03'] as const;
export const radioItems = ['radio01', 'radio02', 'radio03'] as const;
export const selectItems = ['select01', 'select02', 'select03'] as const;
export const formErrorMessage = {
	input: {
		empty: '名前を入力してください',
	},
	textarea: {
		empty: 'コメントを入力してください',
	},
	checkbox: {
		empty: 'チェックしてください',
	},
	radio: {
		empty: 'ラジオボタンを選択してください',
	},
	select: {
		empty: 'セレクトボックスを選択してください',
	},
} as const;

export const basicSchema = v.object({
	input: v.pipe(v.string(), v.nonEmpty(formErrorMessage.input.empty)),
	textarea: v.pipe(v.string(), v.nonEmpty(formErrorMessage.textarea.empty)),
	checkbox: v.pipe(v.array(v.pipe(v.string())), v.nonEmpty(formErrorMessage.checkbox.empty)),
	radio: v.pipe(v.string(), v.nonEmpty(formErrorMessage.radio.empty)),
	select: v.pipe(v.string(), v.nonEmpty(formErrorMessage.select.empty)),
});
export type BasicSchema = v.InferOutput<typeof basicSchema>;
export const formSchema = v.intersect([
	basicSchema,
	v.object({
		obj: basicSchema,
		items: v.array(basicSchema),
	}),
]);
export type FormSchema = v.InferOutput<typeof formSchema>;

export const initialBasicValues: BasicSchema = {
	input: '',
	textarea: '',
	checkbox: [],
	radio: 'radio01',
	select: 'select01',
};
export const initialFormValues: FormSchema = {
	...initialBasicValues,
	obj: initialBasicValues,
	items: [],
};
