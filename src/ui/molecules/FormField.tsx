import { LabelElement } from "@/ui/atoms/LabelElement";

type FormFieldProps = {
	labelTitle: string;
	id: string;
	children?: React.ReactNode;
};

export const FormField = ({ labelTitle, id, children }: FormFieldProps) => {
	return (
		<div className="flex flex-col items-start">
			<LabelElement labelTitle={labelTitle} id={id} />
			{children}
		</div>
	);
};
