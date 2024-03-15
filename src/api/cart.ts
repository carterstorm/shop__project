import { cookies } from "next/headers";
import { executeGraphQL } from "@/utils/executeGraphQL";
import {
	CartAddItemDocument,
	CartCreateDocument,
	CartGetByIdDocument,
	type CartItemFragment,
} from "@/gql/graphql";

export const cartAddItem = async (cartId: string, productId: string, quantity: number) => {
	const graphqlResponse = await executeGraphQL({
		query: CartAddItemDocument,
		variables: {
			cartId,
			productId,
			quantity,
		},
		next: {
			tags: ["cart"],
		},
	});

	if (!graphqlResponse) {
		throw new Error("Failed to add item to cart");
	}

	return graphqlResponse.cartAddItem;
};

export const getCartByIdFromCookie = async () => {
	const cartId = cookies().get("cartId")?.value;

	if (cartId) {
		const cart = await executeGraphQL({
			query: CartGetByIdDocument,
			variables: {
				id: cartId,
			},
			next: {
				tags: ["cart"],
			},
		});

		if (cart) {
			return cart.cart;
		} else {
			throw new Error("Failed to get cart from server");
		}
	}
};

export const createOrFindCart = async () => {
	const graphqlResponse = await executeGraphQL({
		query: CartCreateDocument,
	});

	if (!graphqlResponse) {
		throw new Error("Failed to create cart");
	}

	return graphqlResponse.cartFindOrCreate;
};

export const getOrCreateCart = async (): Promise<CartItemFragment> => {
	const existingCart = await getCartByIdFromCookie();

	if (existingCart) {
		return existingCart;
	}

	const cart = await createOrFindCart();

	if (cart) {
		cookies().set("cartId", cart.id, {
			sameSite: "lax",
			httpOnly: true,
			secure: process.env.NODE_ENV === "production",
			expires: new Date(Date.now() + 60 * 60 * 24 * 1000),
		});
		return cart;
	} else {
		throw new Error("Filed to create cart");
	}
};
