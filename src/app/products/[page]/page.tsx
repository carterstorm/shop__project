"server only";

import { type Metadata } from "next";
import { Pagination } from "@/ui/molecules/Pagination";
import { getNumberOfAllProductsAndAllPages, getProductsList } from "@/api/products";
import { numberOfAllProductsByPage } from "@/constants";
import { ProductList } from "@/ui/organisms/ProductList";
import { PageHeaderHeading } from "@/ui/atoms/PageHeaderHeading";
import { PageHeader } from "@/ui/molecules/PageHeader";
import { setActivePage } from "@/utils/setActivePage";
import { ProductsSort } from "@/ui/atoms/ProductsSort";
import { type ProductSortBy, type SortDirection } from "@/gql/graphql";

type ProductsPageParams = {
	params: {
		page: string;
	};
	searchParams: { [key: string]: string | undefined };
};

export const metadata: Metadata = {
	title: "All products",
	description: "List of all products",
	openGraph: {
		title: "All products",
		description: "List of all products",
	},
};

export default async function ProductsPage({ params, searchParams }: ProductsPageParams) {
	const order = searchParams.order
		? (searchParams.order.toUpperCase() as SortDirection)
		: undefined;
	const orderBy = searchParams.orderBy
		? (searchParams.orderBy.toUpperCase() as ProductSortBy)
		: undefined;

	const { numberOfAllPages } = await getNumberOfAllProductsAndAllPages();
	const activePageNumber = setActivePage(params.page, numberOfAllPages);
	const offset = activePageNumber * numberOfAllProductsByPage - numberOfAllProductsByPage;
	const productsByPageNumber = await getProductsList(
		numberOfAllProductsByPage,
		offset,
		order,
		orderBy,
	);

	return (
		<>
			<PageHeader>
				<PageHeaderHeading>all products</PageHeaderHeading>
			</PageHeader>
			<div className="flex w-full justify-end ">
				<ProductsSort />
			</div>

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
