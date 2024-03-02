import { notFound } from "next/navigation";
import { type Metadata } from "next";
import { Pagination } from "@/ui/molecules/Pagination";
import { getNumberOfAllProductsAndAllPages, getProductsList } from "@/api/products";
import { numberOfAllProductsByPage } from "@/constants";
import { ProductList } from "@/ui/organisms/ProductList";
import { PageHeaderHeading } from "@/ui/atoms/PageHeaderHeading";
import { PageHeader } from "@/ui/molecules/PageHeader";

export const metadata: Metadata = {
	title: "All products",
	description: "List of all products",
	openGraph: {
		title: "All products",
		description: "List of all products",
	},
};

export const generateStaticParams = async () => {
	const { numberOfAllPages } = await getNumberOfAllProductsAndAllPages();

	return Array.from({ length: numberOfAllPages }, (_, i) => ({ page: (i + 1).toString() }));
};

export default async function ProductsPage({ params }: { params: { page: string } }) {
	const activePageNumber = parseInt(params.page) > 0 ? parseInt(params.page) : 1;
	const offset = activePageNumber * numberOfAllProductsByPage - numberOfAllProductsByPage;

	const productsByPageNumber = await getProductsList(numberOfAllProductsByPage, offset);
	const { numberOfAllPages } = await getNumberOfAllProductsAndAllPages();

	if (!productsByPageNumber && !numberOfAllPages) {
		return notFound();
	}

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
