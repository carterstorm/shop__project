import { CollectionsGetListDocument } from "@/gql/graphql";
import { executeGraphQL } from "@/utils/executeGraphQL";

export const getCollections = async (take: number) => {
	const graphqlResponse = await executeGraphQL(CollectionsGetListDocument, { take });

	if (!graphqlResponse) {
		throw new Error("Failed to fetch collections");
	}

	return graphqlResponse.collections.data;
};
