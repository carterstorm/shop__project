// import { getNumberOfAllPages, getProductsListByPageNumber } from "@/api/products";
// import { numberOfProductsByPage } from "@/constants";
// import { Pagination } from "@/ui/molecules/Pagination";
import { getProductsList } from "@/api/products";
import { ProductList } from "@/ui/organisms/ProductList";

// export const generateStaticParams = async () => {
// 	const numberOfAllPages = await getNumberOfAllPages(numberOfProductsByPage);

// 	return Array.from({ length: numberOfAllPages }, (_, i) => ({ page: (i + 1).toString() }));
// };

export default async function ProductsPage({ params }: { params: { page: string } }) {
	const activePageNumber = parseInt(params.page) || 1;
	console.log(activePageNumber);
	// const numberOfAllPages = await getNumberOfAllPages(numberOfProductsByPage);
	// const products = await getProductsListByPageNumber(activePageNumber, numberOfProductsByPage);
	const products = await getProductsList(8);

	return (
		<div className="flex flex-col gap-10">
			<ProductList products={products.data} />
			{/* <Pagination activePageNumber={activePageNumber} numberOfAllPages={numberOfAllPages} /> */}
		</div>
	);
}
