import { Pagination } from "@/ui/molecules/Pagination";
import { ProductList } from "@/ui/organisms/ProductList";
import { getProductsList } from "@/utils";

export default async function ProductsPage({ params }: { params: { pageNumber: string } }) {
	const pageNumber = parseInt(params.pageNumber) || 1;
	const products = await getProductsList(pageNumber);

	return (
		<div className="flex flex-col gap-10">
			<ProductList products={products} />
			<Pagination pageNumber={pageNumber} />
		</div>
	);
}
