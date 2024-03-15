"use client";

import { Trash2 } from "lucide-react";
import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { cartRemoveItem } from "@/app/cart/actions";

export const RemoveProductFromCartButton = ({
	cartId,
	productId,
}: {
	cartId: string;
	productId: string;
}) => {
	const [isPending, startTransition] = useTransition();
	const router = useRouter();

	return (
		<button
			className="flex h-8 w-8 items-center justify-center transition-all"
			disabled={isPending}
			onClick={() => {
				startTransition(async () => {
					await cartRemoveItem(cartId, productId);
					router.refresh();
				});
			}}
		>
			<Trash2 className="hover:text-red-500" />
		</button>
	);
};
