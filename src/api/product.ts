import { ProductGetItemByIdDocument, type ProductsListItemFragment } from "@/gql/graphql";
import { executeGraphQL } from "@/utils/executeGraphQL";

export const getProductById = async (id: ProductsListItemFragment["id"]) => {
	const graphqlResponse = await executeGraphQL({
		query: ProductGetItemByIdDocument,
		variables: { id },
		next: {
			revalidate: 60 * 60 * 24,
		},
	});

	if (!graphqlResponse) {
		throw new Error("Failed to fetch product");
	}

	return graphqlResponse.product;
};
