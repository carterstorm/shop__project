import { changeProductQuantity } from "@/app/cart/actions";

type QuantityButtonProps = {
	children: React.ReactNode;
	setOptimisticQuantity: (quantity: number) => void;
	optimisticQuantity: number;
	cartId: string;
	productId: string;
};

export const QuantityButton = ({
	children,
	setOptimisticQuantity,
	optimisticQuantity,
	cartId,
	productId,
}: QuantityButtonProps) => {
	return (
		<button
			formAction={async () => {
				setOptimisticQuantity(optimisticQuantity + (children === "+" ? 1 : -1));
				await changeProductQuantity(
					cartId,
					productId,
					optimisticQuantity + (children === "+" ? 1 : -1),
				);
			}}
			className="flex h-8 w-8 items-center justify-center rounded-md border text-xl transition-colors  hover:bg-blue-500 hover:text-white"
		>
			{children}
		</button>
	);
};
