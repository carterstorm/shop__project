import { ProductList } from "@/ui/organisms/ProductList";
import { getProductsList } from "@/utils";

export default async function ProductsPage() {
	const products = await getProductsList();

	return <ProductList products={products} />;
}
