import { ProductGetItemByIdDocument } from "@/gql/graphql";
import { executeGraphQL } from "@/utils/executeGraphQL";

export const getProductById = async (id: string) => {
	const graphqlResponse = await executeGraphQL(ProductGetItemByIdDocument, {
		id,
	});

	if (!graphqlResponse) {
		throw new Error("Failed to fetch products");
	}

	return graphqlResponse.product;
};
