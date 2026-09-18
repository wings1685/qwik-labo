import { $, component$ } from "@builder.io/qwik";
import { initialFormValues, formSchema } from "./_models/schema";
import { Form } from "@/components/features";
import MainForm from "./MainForm";

export default component$(() => {
	const schema = $(() => formSchema);

	return (
		<Form
			TargetForm={ MainForm }
			schema={ schema }
			initialValues={ initialFormValues }
			scrollGap={ 80 }
		/>
	);
});
