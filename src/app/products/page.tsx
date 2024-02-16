import { products } from "@/constants";
import { ProductList } from "@/ui/organisms/ProductList";

export default function ProductsPage() {
	return <ProductList products={products} />;
}
