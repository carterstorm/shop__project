"use server";

import { CartChangeItemQuantityDocument } from "@/gql/graphql";
import { executeGraphQL } from "@/utils/executeGraphQL";

export const changeProductQuantity = async (id: string, productId: string, quantity: number) => {
	const graphqlResponse = await executeGraphQL(CartChangeItemQuantityDocument, {
		id: id,
		productId,
		quantity,
	});

	if (!graphqlResponse.cartChangeItemQuantity) {
		throw new Error("Failed to change product quantity");
	}

	return graphqlResponse.cartChangeItemQuantity.id;
};
