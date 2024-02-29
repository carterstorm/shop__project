import { notFound } from "next/navigation";
import { type Route } from "next";
import { ProductList } from "@/ui/organisms/ProductList";
import { getCategoriesBySlug } from "@/api/categories";
import { numberOfProductsByCategoryPage } from "@/constants";
import { Pagination } from "@/ui/molecules/Pagination";

export default async function CategoriesNamePage({
	params,
}: {
	params: { categoryName: string; pageNumber: string };
}) {
	const category = await getCategoriesBySlug(params.categoryName);

	if (!category) {
		return notFound();
	}

	const activePageNumber = parseInt(params.pageNumber) > 0 ? parseInt(params.pageNumber) : 1;
	const pagesByCategory = Math.ceil(category.products.length / numberOfProductsByCategoryPage);

	const slicedProducts = category.products.slice(
		(activePageNumber - 1) * numberOfProductsByCategoryPage,
		activePageNumber * numberOfProductsByCategoryPage,
	);

	return (
		<section>
			<ProductList products={slicedProducts} />
			<Pagination
				path={`categories/${params.categoryName}` as Route}
				activePageNumber={activePageNumber}
				numberOfAllPages={pagesByCategory}
			/>
		</section>
	);
}
