import { ProductGetItemByIdDocument, type ProductsListItemFragment } from "@/gql/graphql";
import { executeGraphQL } from "@/utils/executeGraphQL";

export const getProductById = async (id: ProductsListItemFragment["id"]) => {
	const graphqlResponse = await executeGraphQL(ProductGetItemByIdDocument, {
		id,
	});

	if (!graphqlResponse) {
		throw new Error("Failed to fetch product");
	}

	return graphqlResponse.product;
};
