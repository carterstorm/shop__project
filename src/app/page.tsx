import { ProductList } from "@/ui/organisms/ProductList";
import { getProductsListByPageNumber } from "@/utils";

export default async function Home() {
	const suggestedProducts = await getProductsListByPageNumber();

	return <ProductList products={suggestedProducts.slice(-4)} />;
}
