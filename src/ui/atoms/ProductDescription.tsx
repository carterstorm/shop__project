import { type ProductItemResponse } from "@/types";
import { formatMoney } from "@/utils";

type ProductDescriptionProps = {
	product: ProductItemResponse;
};

export const ProductDescription = ({ product }: ProductDescriptionProps) => {
	return (
		<div className="mt-2 flex justify-between">
			<div>
				<h3 className="text-sm  font-semibold text-red-700">{product.title}</h3>
				<p className="text-sm text-gray-500">{product.category}</p>
			</div>
			<p className="text-sm font-medium text-gray-900">{formatMoney(product.price, "USD")}</p>
		</div>
	);
};
