import { notFound } from "next/navigation";
import { Pagination } from "@/ui/molecules/Pagination";
import { getNumberOfAllProductsPages, getProductsListByPageNumber } from "@/api/products";
import { numberOfAllProductsByPage } from "@/constants";
import { ProductList } from "@/ui/organisms/ProductList";

export const generateStaticParams = async () => {
	const numberOfAllPages = await getNumberOfAllProductsPages();

	return Array.from({ length: numberOfAllPages }, (_, i) => ({ page: (i + 1).toString() }));
};

export default async function ProductsPage({ params }: { params: { page: string } }) {
	const activePageNumber = parseInt(params.page) > 0 ? parseInt(params.page) : 1;
	const offset = activePageNumber * numberOfAllProductsByPage - numberOfAllProductsByPage;

	const products = await getProductsListByPageNumber(numberOfAllProductsByPage, offset);
	const numberOfAllPages = await getNumberOfAllProductsPages();

	if (!products && !numberOfAllPages) {
		return notFound();
	}

	return (
		<div className="flex flex-col gap-10">
			<ProductList products={products} />
			<Pagination
				path="products"
				activePageNumber={activePageNumber}
				numberOfAllPages={numberOfAllPages}
			/>
		</div>
	);
}