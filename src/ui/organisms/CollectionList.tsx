import { type Route } from "next";
import { type CollectionListItemFragment } from "@/gql/graphql";
import { CardItem } from "@/ui/molecules/CardItem";

type CollectionListProps = {
	collections: CollectionListItemFragment[];
};

export const CollectionList = ({ collections }: CollectionListProps) => {
	return (
		<ul className="mx-auto grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
			{collections.map((collection) => {
				return (
					<CardItem
						key={collection.id}
						href={`/collections/${collection.slug}` as Route}
						slug={collection.slug}
						name={collection.name}
						style={collection.slug === "elegant-extras" ? "sm:col-span-2  " : ""}
					/>
				);
			})}
		</ul>
	);
};
