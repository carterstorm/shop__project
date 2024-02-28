import { getCategoriesList } from "@/api/categories";
import { CategoriesList } from "@/ui/organisms/CategoryList";

export default async function CategoriesPage() {
	const categories = await getCategoriesList();

	return (
		<section className="mx-auto lg:max-w-7xl lg:px-0">
			<CategoriesList categories={categories} />
		</section>
	);
}
