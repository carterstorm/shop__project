import { notFound } from "next/navigation";
import { type Metadata, type Route } from "next";
import { ProductList } from "@/ui/organisms/ProductList";
import { getCategoriesBySlug } from "@/api/categories";
import { numberOfProductsByCategoryPage } from "@/constants";
import { Pagination } from "@/ui/molecules/Pagination";
import { PageHeaderHeading } from "@/ui/atoms/PageHeaderHeading";
import { PageHeader } from "@/ui/molecules/PageHeader";
import { PageHeaderParagraph } from "@/ui/atoms/PageHeaderParagraph";

export const generateMetadata = async ({
	params,
}: {
	params: { categoryName: string };
}): Promise<Metadata> => {
	const category = await getCategoriesBySlug(params.categoryName);

	if (!category) {
		return { title: "Category Not Found" };
	}

	return {
		title: category.name,
		description: category.description,
		openGraph: {
			title: category.name,
			description: category.description,
		},
	};
};

export default async function CategoryPage({
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
			<PageHeader>
				<PageHeaderHeading>{category.name}</PageHeaderHeading>
				<PageHeaderParagraph>{category.description}</PageHeaderParagraph>
			</PageHeader>
			<ProductList products={slicedProducts} />
			<Pagination
				path={`categories/${params.categoryName}` as Route}
				activePageNumber={activePageNumber}
				numberOfAllPages={pagesByCategory}
			/>
		</section>
	);
}
