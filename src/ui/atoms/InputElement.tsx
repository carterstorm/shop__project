import clsx from "clsx";
import React from "react";

type InputElementProps = {
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	name: string;
	type?: string;
	id?: string;
	placeholder: string;
	className?: string;
	required?: boolean;
};

export const InputElement = React.forwardRef<HTMLInputElement | null, InputElementProps>(
	({ onChange, placeholder, name, type, id, className, required }, ref) => {
		return (
			<input
				className={clsx(
					className,
					"focus:ring-primary-500 h-10 w-full rounded-lg border px-3 text-xs transition-all duration-300 ease-in-out placeholder:text-xs focus:border-transparent focus:outline-none focus:ring-2",
				)}
				type={type}
				name={name}
				placeholder={placeholder}
				ref={ref}
				id={id}
				onChange={onChange}
				required={required}
			/>
		);
	},
);

InputElement.displayName = "InputElement";
