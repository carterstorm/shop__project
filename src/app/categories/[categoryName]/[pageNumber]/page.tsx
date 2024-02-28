import { notFound } from "next/navigation";
import { getCategoryById } from "@/api/category";
import { ProductList } from "@/ui/organisms/ProductList";

export default async function CategoriesNamePage({
	params,
}: {
	params: { categoryName: string; pageNumber: string };
}) {
	const category = await getCategoryById(params.categoryName);

	if (!category) {
		return notFound();
	}

	return (
		<section>
			<ProductList products={category.products} />
		</section>
	);
}
