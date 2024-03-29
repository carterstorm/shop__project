type TextAreaProps = {
	required?: boolean;
	name: string;
	id: string;
};

export const TextArea = ({ required, name, id }: TextAreaProps) => {
	return (
		<textarea
			maxLength={500}
			required={required}
			name={name}
			id={id}
			placeholder="Enter review message"
			className="focus:ring-primary-500 h-10 max-h-[200px] min-h-10 w-full rounded-xl rounded-br-none border px-3 py-2 text-xs leading-5 transition-all duration-300 ease-in-out focus:border-transparent focus:outline-none focus:ring-2"
		></textarea>
	);
};
