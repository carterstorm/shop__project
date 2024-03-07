import { cookies } from "next/headers";
import {
	CartAddItemDocument,
	CartCreateDocument,
	CartGetByIdDocument,
	type CartItemFragment,
} from "@/gql/graphql";
import { executeGraphQL } from "@/utils/executeGraphQL";

export const cartAddItem = async (cartId: string, productId: string, quantity: number) => {
	const graphqlResponse = await executeGraphQL(CartAddItemDocument, {
		cartId,
		productId,
		quantity,
	});

	if (!graphqlResponse) {
		throw new Error("Failed to add item to cart");
	}

	return graphqlResponse.cartAddItem;
};

export const getCartById = async (cartId: string) => {
	const graphqlResponse = await executeGraphQL(CartGetByIdDocument, { id: cartId });

	if (!graphqlResponse) {
		throw new Error("Failed to find cart");
	}

	return graphqlResponse.cart;
};

export const createOrFindCart = async () => {
	const graphqlResponse = await executeGraphQL(CartCreateDocument, {});

	if (!graphqlResponse) {
		throw new Error("Failed to create cart");
	}

	return graphqlResponse.cartFindOrCreate;
};

export const getOrCreateCart = async (): Promise<CartItemFragment> => {
	const cartId = cookies().get("cartId")?.value;

	if (cartId) {
		const cart = await getCartById(cartId);

		if (cart) {
			return cart;
		} else {
			throw new Error("Filed to find cart at server side");
		}
	} else {
		const cart = await createOrFindCart();

		if (cart) {
			return cart;
		} else {
			throw new Error("Filed to create cart");
		}
	}
};
