"use server";

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Stripe from "stripe";
import { executeGraphQL } from "@/utils/executeGraphQL";
import { CartChangeItemQuantityDocument, CartRemoveItemDocument } from "@/gql/graphql";
import { getCartByIdFromCookie } from "@/api/cart";

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

export const cartRemoveItem = async (cartId: string, productId: string) => {
	const graphqlResponse = await executeGraphQL({
		query: CartRemoveItemDocument,
		variables: {
			id: cartId,
			productId,
		},
	});

	if (!graphqlResponse) {
		throw new Error("Failed to remove item from cart");
	}
	revalidateTag("cart");

	return graphqlResponse.cartRemoveItem;
};

export const handlePaymentAction = async () => {
	const cart = await getCartByIdFromCookie();

	if (!cart || cart.items.length === 0) {
		return;
	}

	if (!process.env.STRIPE_SECRET_KEY) {
		throw new Error("Stripe secret key is not provided");
	}

	const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
		apiVersion: "2023-10-16",
		typescript: true,
	});

	const session = await stripe.checkout.sessions.create({
		metadata: {
			cartId: cart.id,
		},
		line_items: cart.items.map((cartItem) => ({
			price_data: {
				currency: "usd",
				product_data: {
					name: cartItem.product.name,
					images: cartItem.product.images.map((image) => image.url),
				},
				unit_amount: cartItem.product.price,
			},
			quantity: cartItem.quantity,
		})),
		mode: "payment",
		success_url: `http://localhost:3000/cart/success?session_id={CHECKOUT_SESSION_ID}`,
		cancel_url: `http://localhost:3000/cart/canceled`,
	});
	if (session.url) {
		cookies().set("cartId", "");
		redirect(session.url);
	}
};
