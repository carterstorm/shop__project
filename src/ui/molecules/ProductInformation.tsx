// import { getOrCreate } from "@/api/cart";
import { cookies } from "next/headers";
import { cartAddItem, getOrCreateCart } from "@/api/cart";
import { type ProductsListItemFragment } from "@/gql/graphql";
import { AddProductToCartButton } from "@/ui/atoms/AddProductToCartButton";
import { SingleProductInfo } from "@/ui/atoms/SingleProductInfo";
import { SingleProductLongDescription } from "@/ui/atoms/SingleProductLongDescription";

type ProductInformationProps = {
	product: ProductsListItemFragment;
};

export const ProductInformation = ({ product }: ProductInformationProps) => {
	async function addProductToCartAction() {
		"use server";

		const cart = await getOrCreateCart();
		cookies().set("cartId", cart.id, {
			sameSite: "lax",
			httpOnly: true,
			secure: process.env.NODE_ENV === "production",
			expires: new Date(Date.now() + 60 * 60 * 24 * 1000),
		});
		await cartAddItem(cart.id, product.id, 1);
	}

	return (
		<form action={addProductToCartAction} className="flex flex-col items-start gap-6 text-gray-600">
			<SingleProductInfo product={product} />
			<SingleProductLongDescription product={product} />
			<AddProductToCartButton />
		</form>
	);
};
