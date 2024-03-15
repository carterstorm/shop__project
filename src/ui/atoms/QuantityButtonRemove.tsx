import { cartRemoveItem } from "@/app/cart/actions";

export const QuantityButtonRemove = ({
	cartId,
	productId,
}: {
	cartId: string;
	productId: string;
}) => {
	return (
		<button
			className="flex h-8 w-8 items-center justify-center rounded-md border text-xl transition-colors  hover:bg-red-500 hover:text-white"
			formAction={async () => {
				await cartRemoveItem(cartId, productId);
			}}
		>
			-
		</button>
	);
};
