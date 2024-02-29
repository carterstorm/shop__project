import { type Route } from "next";
import { type CategoryListItemFragment } from "@/gql/graphql";
import { CardItem } from "@/ui/molecules/CardItem";

type CategoriesListProps = {
	categories: CategoryListItemFragment[];
};

export const CategoriesCardsList = ({ categories }: CategoriesListProps) => {
	return (
		<ul className="mx-auto grid grid-cols-1 gap-4 py-6 sm:grid-cols-2 md:grid-cols-3">
			{categories.map((category) => {
				return (
					<CardItem
						key={category.id}
						href={`/categories/${category.slug}/1` as Route}
						slug={category.slug}
						name={category.name}
						style={category.slug === "t-shirts" ? "sm:col-span-2  " : ""}
					/>
				);
			})}
		</ul>
	);
};
