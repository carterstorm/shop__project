import { CategoryGetItemByIdDocument } from "@/gql/graphql";
import { executeGraphQL } from "@/utils/executeGraphQL";

export const getCategoryById = async (slug: string) => {
	const graphqlResponse = await executeGraphQL(CategoryGetItemByIdDocument, { slug });

	if (!graphqlResponse) {
		throw new Error("Failed to fetch category");
	}

	return graphqlResponse.category;
};
