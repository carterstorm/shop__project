import { type ProductsListItemFragment } from "@/gql/graphql";
import { ProductDynamicStarAndNumberRating } from "@/ui/atoms/ProductDynamicStarAndNumberRating";
import { formatMoney } from "@/utils/formatMoney";

type ProductDescriptionProps = {
	product: ProductsListItemFragment;
};

export const ProductListDescription = ({ product }: ProductDescriptionProps) => {
	return (
		<div className="mt-2 flex justify-between">
			<div>
				<h3 className="text-sm  font-semibold text-blue-400">{product.name}</h3>
				<p className="text-sm text-gray-500">{product.categories[0].name}</p>
			</div>
			<div className="flex flex-col items-end justify-center">
				<p className="text-sm font-medium text-gray-900" data-testid="product-price">
					{formatMoney(product.price)}
				</p>
				<ProductDynamicStarAndNumberRating
					product={product}
					starSize={12}
					ratingProductTextSize="text-[9px]"
				/>
			</div>
		</div>
	);
};
