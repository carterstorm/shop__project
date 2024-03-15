import { type ProductsListItemFragment } from "@/gql/graphql";
import { formatMoney } from "@/utils/formatMoney";

export const SingleProductInfo = ({ product }: { product: ProductsListItemFragment }) => {
	return (
		<div className="flex flex-col gap-2">
			<span className="text-lg text-gray-400">{product.categories[0].name}</span>
			<h1 className="text-3xl font-extrabold text-blue-500">{product.name}</h1>
			<div className="flex gap-4">
				<span>{product.rating?.toFixed(2)}/5</span>
			</div>
			<p className="italic">{product.categories[0].description}</p>
			<span className="text-3xl font-bold text-gray-700">{formatMoney(product.price)}</span>
		</div>
	);
};
