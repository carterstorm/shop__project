import { type CategoryListItemFragment } from "@/gql/graphql";
import { CategoryCardListItem } from "@/ui/molecules/CategoryListItem";

type CategoriesListProps = {
	categories: CategoryListItemFragment[];
};

export const CategoriesCardsList = ({ categories }: CategoriesListProps) => {
	return (
		<ul className="mx-auto grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
			{categories.map((category) => {
				return <CategoryCardListItem key={category.id} category={category} />;
			})}
		</ul>
	);
};
