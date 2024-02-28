import { type ProductsListItemFragment } from "@/gql/graphql";

export const SingleProductLongDescription = ({
	product,
}: {
	product: ProductsListItemFragment;
}) => {
	return <p>{product.description}</p>;
};
