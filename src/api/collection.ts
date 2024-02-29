import { CollectionGetItemBySlugDocument } from "@/gql/graphql";
import { executeGraphQL } from "@/utils/executeGraphQL";

export const getCollectionBySlug = async (slug: string) => {
	const graphqlResponse = await executeGraphQL(CollectionGetItemBySlugDocument, { slug });

	if (!graphqlResponse) {
		throw new Error("Failed to fetch collection");
	}

	return graphqlResponse.collection;
};
