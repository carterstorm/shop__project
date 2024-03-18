import { CollectionGetItemBySlugDocument } from "@/gql/graphql";
import { executeGraphQL } from "@/utils/executeGraphQL";

export const getCollectionBySlug = async (slug: string) => {
	const graphqlResponse = await executeGraphQL({
		query: CollectionGetItemBySlugDocument,
		variables: { slug },
		next: {
			revalidate: 60 * 60 * 24,
		},
	});

	if (!graphqlResponse) {
		throw new Error("Failed to fetch collection");
	}

	return graphqlResponse.collection;
};
