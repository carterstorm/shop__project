import { Pagination } from "@/ui/molecules/Pagination";
import { getNumberOfAllPages, getProductsListByPageNumber } from "@/api/products";
import { numberOfProductsByPage } from "@/constants";
import { ProductList } from "@/ui/organisms/ProductList";

export const generateStaticParams = async () => {
	const numberOfAllPages = await getNumberOfAllPages();

	return Array.from({ length: numberOfAllPages }, (_, i) => ({ page: (i + 1).toString() }));
};

export default async function ProductsPage({ params }: { params: { page: string } }) {
	const activePageNumber = parseInt(params.page) > 0 ? parseInt(params.page) : 1;
	const offset = activePageNumber * numberOfProductsByPage - numberOfProductsByPage;

	const products = await getProductsListByPageNumber(numberOfProductsByPage, offset);
	const numberOfAllPages = await getNumberOfAllPages();

	return (
		<div className="flex flex-col gap-10">
			<ProductList products={products} />
			<Pagination activePageNumber={activePageNumber} numberOfAllPages={numberOfAllPages} />
		</div>
	);
}
