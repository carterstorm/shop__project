import { ProductList } from "@/ui/organisms/ProductList";
import { getProductsList } from "@/utils";

export const SuggestedProducts = async () => {
	const suggestedProducts = await getProductsList();
	const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

	await sleep(1000);

	return <ProductList products={suggestedProducts.slice(-4)} />;
};
