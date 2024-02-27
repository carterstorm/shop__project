import { getProductsListByPageNumber } from "@/api/products";
import { ProductList } from "@/ui/organisms/ProductList";

export const SuggestedProducts = async () => {
	const suggestedProducts = await getProductsListByPageNumber();
	const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

	await sleep(1000);

	return <ProductList products={suggestedProducts.slice(-4)} />;
};
