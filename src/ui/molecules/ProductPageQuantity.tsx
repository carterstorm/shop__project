"use client";

import { useState } from "react";
import { ProductPageQuantityButton } from "@/ui/atoms/ProductPageQuantityButton";

export const ProductPageQuantity = () => {
	const [quantity, setQuantity] = useState(1);

	const handleClick = (option: string) => {
		if (option === "increment" && quantity < 10) {
			setQuantity((prevQuantity: number) => prevQuantity + 1);
		} else if (option === "decrement" && quantity > 1) {
			setQuantity((prevQuantity: number) => prevQuantity - 1);
		}
	};

	return (
		<div className="flex items-center gap-2">
			<ProductPageQuantityButton
				operation={"decrement"}
				handleClick={handleClick}
				quantity={quantity}
			/>
			<input
				name="quantity"
				readOnly
				value={quantity}
				onChange={(event) => event.target.value}
				className="h-12 w-12 rounded-md border bg-white text-center"
			/>
			<ProductPageQuantityButton
				operation={"increment"}
				handleClick={handleClick}
				quantity={quantity}
			/>
		</div>
	);
};
