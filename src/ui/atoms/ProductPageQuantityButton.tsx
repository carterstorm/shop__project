import clsx from "clsx";

type ProductPageQuantityButtonProps = {
	operation: string;
	quantity: number;
	handleClick: (option: string) => void;
};

export const ProductPageQuantityButton = ({
	operation,
	quantity,
	handleClick,
}: ProductPageQuantityButtonProps) => {
	return (
		<button
			disabled={
				(quantity === 1 && operation === "decrement") ||
				(quantity === 10 && operation === "increment")
			}
			className={clsx(
				"h-8 w-8 rounded-lg border bg-slate-200 transition hover:border-blue-500 hover:bg-blue-500 hover:text-slate-50 disabled:cursor-not-allowed disabled:bg-slate-500",
			)}
			onClick={(event) => {
				event.preventDefault();
				handleClick(operation);
			}}
		>
			{operation === "increment" ? "+" : "-"}
		</button>
	);
};
