import { Pagination } from "@/ui/molecules/Pagination";
import { ProductList } from "@/ui/organisms/ProductList";
import { getProductsList } from "@/utils";

export const generateStaticParams = async () => {
	return [...Array(20).keys()].map((page) => ({
		params: { pageNumber: page + 1 },
	}));
};

export default async function ProductsPage({ params }: { params: { page: string } }) {
	const page = parseInt(params.page) || 1;
	const products = await getProductsList(page);

	return (
		<div className="flex flex-col gap-10">
			<ProductList products={products} />
			<Pagination pageNumber={page} />
		</div>
	);
}
