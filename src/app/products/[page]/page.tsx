import { getNumberOfAllPages, getProductsListByPageNumber } from "@/api/products";
import { numberOfProductsByPage } from "@/constants";
import { Pagination } from "@/ui/molecules/Pagination";
import { ProductList } from "@/ui/organisms/ProductList";

export const generateStaticParams = async () => {
	const numberOfAllPages = await getNumberOfAllPages(numberOfProductsByPage);

	return Array.from({ length: numberOfAllPages }, (_, i) => ({ page: (i + 1).toString() }));
};

export default async function ProductsPage({ params }: { params: { page: string } }) {
	const activePageNumber = parseInt(params.page) || 1;
	const numberOfAllPages = await getNumberOfAllPages(numberOfProductsByPage);
	const products = await getProductsListByPageNumber(activePageNumber, numberOfProductsByPage);

	return (
		<div className="flex flex-col gap-10">
			<ProductList products={products} />
			<Pagination activePageNumber={activePageNumber} numberOfAllPages={numberOfAllPages} />
		</div>
	);
}
