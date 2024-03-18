import { CollectionsGetListDocument } from "@/gql/graphql";
import { executeGraphQL } from "@/utils/executeGraphQL";

export const getCollections = async (take: number) => {
	const graphqlResponse = await executeGraphQL({
		query: CollectionsGetListDocument,
		variables: { take },
		next: {
			revalidate: 60 * 60 * 24,
		},
	});

	if (!graphqlResponse) {
		throw new Error("Failed to fetch collections");
	}

	return graphqlResponse.collections.data;
};
