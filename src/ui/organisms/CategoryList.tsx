import { type CategoryListItemFragment } from "@/gql/graphql";
import { CategoryListItem } from "@/ui/molecules/CategoryListItem";

type CategoriesListProps = {
	categories: CategoryListItemFragment[];
};

export const CategoriesList = ({ categories }: CategoriesListProps) => {
	return (
		<ul className="mx-auto grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
			{categories.map((category) => {
				return <CategoryListItem key={category.id} category={category} />;
			})}
		</ul>
	);
};
