// import { notFound } from "next/navigation";
import { ProductList } from "@/ui/organisms/ProductList";
import { getProductsListBySearchParams } from "@/api/products";

export default async function SearchPage({ searchParams }: { searchParams: { query: string } }) {
	const products = await getProductsListBySearchParams(searchParams.query);

	if (!products) {
		<p>NotFound</p>;
	}

	return (
		<section>
			<ProductList products={products} />
		</section>
	);
}
