import { type ProductsListItemFragment } from "@/gql/graphql";
import { ProductList } from "@/ui/organisms/ProductList";
import { getRandomProducts } from "@/utils/getRandomProducts";

export const SuggestedProducts = async ({
	suggestedProducts,
}: {
	suggestedProducts: ProductsListItemFragment[];
}) => {
	const shuffledSuggestedProducts = getRandomProducts(suggestedProducts, 4);

	const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

	await sleep(1000);

	return (
		<div data-testid="related-products">
			<ProductList products={shuffledSuggestedProducts} />
		</div>
	);
};
