import { products } from "@/constants";
import { ProductList } from "@/ui/organisms/ProductList";

export default function Home() {
	return (
		<section className="mx-auto max-w-2xl px-8 py-12 sm:px-6 sm:py-16 md:max-w-4xl lg:max-w-7xl">
			<ProductList products={products} />
		</section>
	);
}
