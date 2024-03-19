type LabelElementProps = {
	labelTitle: string;
	id: string;
};

export const LabelElement = ({ labelTitle, id }: LabelElementProps) => {
	return (
		<label className="my-2 cursor-pointer text-sm font-semibold text-blue-400" htmlFor={id}>
			{labelTitle}
		</label>
	);
};
