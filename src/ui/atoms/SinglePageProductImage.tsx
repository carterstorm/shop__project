import { type ProductItemResponse } from "@/types";

export const SinglePageProductImage = ({ product }: { product: ProductItemResponse }) => {
	return (
		<div className="flex justify-center">
			<img src={product.image} alt={product.title} className="w-96 rounded-lg object-contain" />
		</div>
	);
};