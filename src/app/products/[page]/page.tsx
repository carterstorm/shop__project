import { type Metadata } from "next";
import { Pagination } from "@/ui/molecules/Pagination";
import { getNumberOfAllProductsAndAllPages, getProductsList } from "@/api/products";
import { numberOfAllProductsByPage } from "@/constants";
import { ProductList } from "@/ui/organisms/ProductList";
import { PageHeaderHeading } from "@/ui/atoms/PageHeaderHeading";
import { PageHeader } from "@/ui/molecules/PageHeader";
import { setActivePage } from "@/utils/setActivePage";

export const metadata: Metadata = {
	title: "All products",
	description: "List of all products",
	openGraph: {
		title: "All products",
		description: "List of all products",
	},
};

export default async function ProductsPage({ params }: { params: { page: string } }) {
	const { numberOfAllPages } = await getNumberOfAllProductsAndAllPages();
	const activePageNumber = setActivePage(params.page, numberOfAllPages);
	const offset = activePageNumber * numberOfAllProductsByPage - numberOfAllProductsByPage;
	const productsByPageNumber = await getProductsList(numberOfAllProductsByPage, offset);

	return (
		<>
			<PageHeader>
				<PageHeaderHeading>all Products</PageHeaderHeading>
			</PageHeader>
			<div className="flex flex-col gap-10">
				<ProductList products={productsByPageNumber} />
				<Pagination
					path="products"
					activePageNumber={activePageNumber}
					numberOfAllPages={numberOfAllPages}
				/>
			</div>
		</>
	);
}
