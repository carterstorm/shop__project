"use client";

import { useOptimistic } from "react";
import { QuantityButton } from "@/ui/atoms/QuantityButton";

type ProductQuantityProps = {
	quantity: number;
	cartId: string;
	productId: string;
};

export const ProductQuantity = ({ quantity, cartId, productId }: ProductQuantityProps) => {
	const [optimisticQuantity, setOptimisticQuantity] = useOptimistic(quantity);

	return (
		<form className="flex items-center justify-center gap-4">
			<QuantityButton
				setOptimisticQuantity={setOptimisticQuantity}
				optimisticQuantity={optimisticQuantity}
				cartId={cartId}
				productId={productId}
			>
				-
			</QuantityButton>
			<span className="inline-block w-10">{quantity}</span>
			<QuantityButton
				setOptimisticQuantity={setOptimisticQuantity}
				optimisticQuantity={optimisticQuantity}
				cartId={cartId}
				productId={productId}
			>
				+
			</QuantityButton>
		</form>
	);
};
