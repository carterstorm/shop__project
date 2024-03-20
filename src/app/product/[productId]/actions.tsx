"use server";

import { revalidateTag } from "next/cache";
import { ReviewCreateDocument } from "@/gql/graphql";
import { executeGraphQL } from "@/utils/executeGraphQL";

type ReviewData = {
	title: string;
	description: string;
	author: string;
	email: string;
	rating: number;
	createdAt: string;
	productId: string;
};

export const handleAddReviewAction = async (reviewData: ReviewData) => {
	const { title, description, author, email, rating, createdAt, productId } = reviewData;

	const graphqlResponse = await executeGraphQL({
		query: ReviewCreateDocument,
		variables: {
			title,
			description,
			author,
			email,
			rating,
			createdAt,
			productId,
		},
	});

	if (!graphqlResponse) {
		throw new Error("Failed to send reviews");
	}

	revalidateTag("product");

	return graphqlResponse.reviewCreate;
};
