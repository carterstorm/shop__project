import { notFound } from "next/navigation";
import { type Metadata } from "next";
import { getCategoriesList } from "@/api/categories";
import { CategoriesCardsList } from "@/ui/organisms/CategoryList";
import { PageHeaderHeading } from "@/ui/atoms/PageHeaderHeading";
import { PageHeader } from "@/ui/molecules/PageHeader";

export const metadata: Metadata = {
	title: "All categories",
	description: "List of all categories",
	openGraph: {
		title: "All categories",
		description: "List of all categories",
	},
};

export default async function CategoriesPage() {
	const categories = await getCategoriesList();

	if (!categories) {
		return notFound();
	}

	return (
		<section className="mx-auto lg:max-w-7xl lg:px-0">
			<PageHeader>
				<PageHeaderHeading>All Categories</PageHeaderHeading>
			</PageHeader>
			<CategoriesCardsList categories={categories} />
		</section>
	);
}
