import { CategoryGetItemBySlugDocument } from "@/gql/graphql";
import { executeGraphQL } from "@/utils/executeGraphQL";

export const getCategoryBySlug = async (slug: string) => {
	const graphqlResponse = await executeGraphQL(CategoryGetItemBySlugDocument, { slug });

	if (!graphqlResponse) {
		throw new Error("Failed to fetch category");
	}

	return graphqlResponse.category;
};
