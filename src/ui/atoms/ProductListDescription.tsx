import { type ProductItemResponse } from "@/types";
import { formatMoney } from "@/utils/formatMoney";

type ProductDescriptionProps = {
	product: ProductItemResponse;
};

export const ProductListDescription = ({ product }: ProductDescriptionProps) => {
	return (
		<div className="mt-2 flex justify-between">
			<div>
				<h3 className="text-sm  font-semibold text-blue-400">{product.title}</h3>
				<p className="text-sm text-gray-500">{product.category}</p>
			</div>
			<p className="text-sm font-medium text-gray-900">{formatMoney(product.price, "USD")}</p>
		</div>
	);
};
