// import { notFound } from "next/navigation";
import { ProductList } from "@/ui/organisms/ProductList";
import { getProductsListBySearchParams } from "@/api/products";

export default async function SearchPage({ searchParams }: { searchParams: { query: string } }) {
	const products = await getProductsListBySearchParams(searchParams.query);

	if (!products || products.length === 0) return <p>No products found.</p>;

	return (
		<section>
			<ProductList products={products} />
		</section>
	);
}
