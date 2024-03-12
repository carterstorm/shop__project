"use server";

import { revalidateTag } from "next/cache";
import { CartChangeItemQuantityDocument } from "@/gql/graphql";
import { executeGraphQL } from "@/utils/executeGraphQL";

export const changeProductQuantity = async (id: string, productId: string, quantity: number) => {
	const graphqlResponse = await executeGraphQL({
		query: CartChangeItemQuantityDocument,
		variables: { id: id, productId, quantity },
	});

	if (!graphqlResponse.cartChangeItemQuantity) {
		throw new Error("Failed to change product quantity");
	}

	revalidateTag("cart");

	return graphqlResponse.cartChangeItemQuantity.id;
};
