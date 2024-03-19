import { ReviewGetListDocument } from "@/gql/graphql";
import { executeGraphQL } from "@/utils/executeGraphQL";

export const getAllReviewsByProductId = async (productId: string) => {
	const graphqlResponse = await executeGraphQL({
		query: ReviewGetListDocument,
		variables: { id: productId },
	});

	if (!graphqlResponse) {
		throw new Error("Failed to fetch reviews");
	}

	return graphqlResponse;
};
