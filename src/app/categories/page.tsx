import { notFound } from "next/navigation";
import { getCategoriesList } from "@/api/categories";
import { CategoriesCardsList } from "@/ui/organisms/CategoryList";

export default async function CategoriesPage() {
	const categories = await getCategoriesList();

	if (!categories) {
		return notFound();
	}

	return (
		<section className="mx-auto lg:max-w-7xl lg:px-0">
			<CategoriesCardsList categories={categories} />
		</section>
	);
}
