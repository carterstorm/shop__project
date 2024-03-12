import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import clsx from "clsx";
import { getCartByIdFromCookie } from "@/api/cart";

export const Cart = async () => {
	const cart = await getCartByIdFromCookie();
	const quantity = cart?.items.reduce((acc, item) => acc + item.quantity, 0) || 0;

	return (
		<Link href="/cart" className="relative flex items-center justify-center gap-1">
			<div className="relative">
				<ShoppingCart />
				{quantity === 0 && (
					<span className="absolute left-2/4 -translate-x-2/4 text-[10px]">Empty</span>
				)}
			</div>
			<span
				className={clsx(
					"flex h-5 w-5  -translate-y-14 items-center justify-center rounded-full bg-red-400 text-xs text-white transition",
					quantity !== 0 && "translate-y-0 animate-brakeAndReverse",
				)}
			>
				{quantity}
			</span>
		</Link>
	);
};
