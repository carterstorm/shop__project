import { ProductList } from "@/ui/organisms/ProductList";
import { getProductsList } from "@/utils";

export default async function Home() {
	const suggestedProducts = await getProductsList();

	return <ProductList products={suggestedProducts.slice(-4)} />;
}
