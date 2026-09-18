import { $, component$ } from "@builder.io/qwik";
import { checkboxItems, formErrorMessage, initialBasicValues, radioItems, selectItems } from "./_models/schema";
import type { FormProps } from "@/components/features/form/types";
import type { FormSchema } from "./_models/schema";

export default component$(<T extends FormSchema>(props: FormProps<T>) => {
	const { data, errors, setErrors$, bindElement$, onSubmit$, isSubmitDisabled, reset$ } = props;

	const handleInput$ = $((_: Event, el: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement) => {
		const keys = el.name.split('.');
		const value = el.value;
		const values = <T,>(elItems: T[]) => ('checked' in el && el.checked ? [ ...elItems, value ] : elItems.filter(item => item !== value).map(item => item));
		if (keys.length === 1) {
			if (el.type === 'checkbox') {
				data.checkbox = values(data.checkbox);
			} else {
				type Key = Exclude<keyof typeof data, 'checkbox'>;
				const key = keys[0] as Key;
				data[key] = value as T[Key];
			}
		} else if (keys[0] === 'obj' && keys.length === 2) {
			if (el.type === 'checkbox') {
				data.obj.checkbox = values(data.obj.checkbox);
			} else {
				type Key = Exclude<keyof typeof data.obj, 'checkbox'>;
				const key = keys[1] as Key;
				data.obj[key] = value as T['obj'][Key];
			}
		} else if (keys[0] === 'items' && !Number.isNaN(keys[1]) && keys.length === 3) {
			const index = +keys[1];
			if (el.type === 'checkbox') {
				data.items[index].checkbox = values(data.items[index].checkbox);
			} else {
				type Key = Exclude<keyof typeof data.items[number], 'checkbox'>;
				const key = keys[2] as Key;
				data.items[index][key] = value as T['items'][number][Key];
			}
		}
	});
	const addItem$ = $(() => {
		data.items = [ ...data.items, initialBasicValues ];
	});

	const handleSubmit$ = $(() => {
		setErrors$({ error: ['エラーで一番上にスクロールします'] });
	});

	return (
		<form preventdefault:submit onSubmit$={ () => onSubmit$(handleSubmit$) }>
			<p onQVisible$={ bindElement$ } data-el="error">{ errors.error }</p>
			<fieldset>
				<input name="input" type="text" value={ data.input } onFocus$={ bindElement$ } onInput$={ handleInput$ } />
				{errors.input && <p>{ formErrorMessage.input.empty }</p>}
			</fieldset>
			<fieldset>
				<textarea name="textarea" value={ data.textarea } onFocus$={ bindElement$ } onInput$={ handleInput$ } />
				{errors.textarea && <p>{ formErrorMessage.textarea.empty }</p>}
			</fieldset>
			<fieldset>
				<div>
					{checkboxItems.map(check => (
						<label key={ check }>
							<input name="checkbox" type="checkbox" value={ check } onFocus$={ bindElement$ } checked={ data.checkbox.includes(check) } onChange$={ handleInput$ } />
							<span>{ check }</span>
						</label>
					))}
					{errors.checkbox && <p>{ formErrorMessage.checkbox.empty }</p>}
				</div>
			</fieldset>
			<fieldset>
				<div>
					<label>
						<input name="radio" type="radio" value="" onFocus$={ bindElement$ } onChange$={ handleInput$ } />
						<span>選択なし</span>
					</label>
					{radioItems.map(radio => (
						<label key={ radio }>
							<input name="radio" type="radio" value={ radio } onFocus$={ bindElement$ } checked={ radio === data.radio } onChange$={ handleInput$ } />
							<span>{ radio }</span>
						</label>
					))}
					{errors.radio && <p>{ formErrorMessage.radio.empty }</p>}
				</div>
			</fieldset>
			<fieldset>
				<div>
					<select name="select" value={ data.select } onFocus$={ bindElement$ } onChange$={ handleInput$ }>
						<option value="">---</option>
						{selectItems.map(select => (
							<option key={ select } value={ select } selected={ select === data.select }>{ select }</option>
						))}
					</select>
					{errors.select && <p>{ formErrorMessage.select.empty }</p>}
				</div>
			</fieldset>
			<div class="obj">
				<fieldset>
					<input name="obj.input" type="text" value={ data.obj.input } onFocus$={ bindElement$ } onInput$={ handleInput$ } />
					{errors[`obj.input`] && <p>{ formErrorMessage.input.empty }</p>}
				</fieldset>
				<fieldset>
					<textarea name="obj.textarea" value={ data.obj.textarea } onFocus$={ bindElement$ } onInput$={ handleInput$ } />
					{errors[`obj.textarea`] && <p>{ formErrorMessage.textarea.empty }</p>}
				</fieldset>
				<fieldset>
					<div>
						{checkboxItems.map(check => (
							<label key={ check }>
								<input name="obj.checkbox" type="checkbox" value={ check } onFocus$={ bindElement$ } checked={ data.obj.checkbox.includes(check) } onChange$={ handleInput$ } />
								<span>{ check }</span>
							</label>
						))}
						{errors[`obj.checkbox`] && <p>{ formErrorMessage.checkbox.empty }</p>}
					</div>
				</fieldset>
				<fieldset>
					<div>
						<label>
							<input name="obj.radio" type="radio" value="" onFocus$={ bindElement$ } onChange$={ handleInput$ } />
							<span>選択なし</span>
						</label>
						{radioItems.map(radio => (
							<label key={ radio }>
								<input name="obj.radio" type="radio" value={ radio } onFocus$={ bindElement$ } checked={ radio === data.obj.radio } onChange$={ handleInput$ } />
								<span>{ radio }</span>
							</label>
						))}
						{errors[`obj.radio`] && <p>{ formErrorMessage.radio.empty }</p>}
					</div>
				</fieldset>
				<fieldset>
					<select name="obj.select" value={ data.obj.select } onFocus$={ bindElement$ } onChange$={ handleInput$ }>
						<option value="">---</option>
						{selectItems.map(select => (
							<option key={ select } value={ select } selected={ select === data.obj.select }>{ select }</option>
						))}
					</select>
					{errors[`obj.select`] && <p>{ formErrorMessage.select.empty }</p>}
				</fieldset>
			</div>
			<fieldset>
				<button type="button" onClick$={ addItem$ }>Add Item</button>
			</fieldset>
			<div class="items">
				{data.items.map((item, index) => (
					<div key={ index } class="item">
						<fieldset>
							<input name={ `items.${index}.input` } type="text" value={ item.input } onFocus$={ bindElement$ } onInput$={ handleInput$ } />
							{errors[`items.${index}.input`] && <p>{ formErrorMessage.input.empty }</p>}
						</fieldset>
						<fieldset>
							<textarea name={ `items.${index}.textarea` } value={ item.textarea } onFocus$={ bindElement$ } onInput$={ handleInput$ } />
							{errors[`items.${index}.textarea`] && <p>{ formErrorMessage.textarea.empty }</p>}
						</fieldset>
						<fieldset>
							<div>
								{checkboxItems.map(check => (
									<label key={ check }>
										<input name={ `items.${index}.checkbox` } type="checkbox" value={ check } onFocus$={ bindElement$ } checked={ item.checkbox.includes(check) } onChange$={ handleInput$ } />
										<span>{ check }</span>
									</label>
								))}
								{errors[`items.${index}.checkbox`] && <p>{ formErrorMessage.checkbox.empty }</p>}
							</div>
						</fieldset>
						<fieldset>
							<div>
								<label>
									<input name={ `items.${index}.radio` } type="radio" value="" onFocus$={ bindElement$ } onChange$={ handleInput$ } />
									<span>選択なし</span>
								</label>
								{radioItems.map(radio => (
									<label key={ radio }>
										<input name={ `items.${index}.radio` } type="radio" value={ radio } onFocus$={ bindElement$ } checked={ radio === item.radio } onChange$={ handleInput$ }  />
										<span>{ radio }</span>
									</label>
								))}
								{errors[`items.${index}.radio`] && <p>{ formErrorMessage.radio.empty }</p>}
							</div>
						</fieldset>
						<fieldset>
							<select name={ `items.${index}.select` } value={ item.select } onFocus$={ bindElement$ } onChange$={ handleInput$ }>
								<option value="">---</option>
								{selectItems.map(select => (
									<option key={ select } value={ select } selected={ select === item.select }>{ select }</option>
								))}
							</select>
							{errors[`items.${index}.select`] && <p>{ formErrorMessage.select.empty }</p>}
						</fieldset>
					</div>
				))}
			</div>
			<fieldset>
				<button type="submit" disabled={ isSubmitDisabled }>Submit</button>
			</fieldset>
			<fieldset>
				<button type="button" onClick$={ reset$ }>Reset</button>
			</fieldset>
		</form>
	)
});
