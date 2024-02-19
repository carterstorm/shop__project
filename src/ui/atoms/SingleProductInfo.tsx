import { type ProductItemResponse } from "@/types";
import { formatMoney } from "@/utils";

export const SingleProductInfo = ({ product }: { product: ProductItemResponse }) => {
	return (
		<div className="flex flex-col gap-2">
			<span className="text-lg text-gray-400">{product.category}</span>
			<h1 className="text-3xl font-extrabold text-blue-400">{product.title}</h1>
			<div className="flex gap-4">
				<span>{product.rating.rate}/5</span>
				<span>({product.rating.count}) reviews</span>
			</div>
			<p className="italic">{product.description}</p>
			<span className="text-3xl font-bold text-gray-700">{formatMoney(product.price, "USD")}</span>
		</div>
	);
};
