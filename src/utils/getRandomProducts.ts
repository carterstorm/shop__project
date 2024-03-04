import { type ProductsListItemFragment } from "@/gql/graphql";

export const getRandomProducts = (
	array: ProductsListItemFragment[],
	numberOfDisplayedItems: number,
) => {
	const shuffled = array.slice().sort(() => 0.5 - Math.random());
	return shuffled.slice(0, numberOfDisplayedItems);
};
