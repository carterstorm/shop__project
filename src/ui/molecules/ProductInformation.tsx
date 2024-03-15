import { revalidateTag } from "next/cache";
import { cartAddItem, getOrCreateCart } from "@/api/cart";
import { type ProductsListItemFragment } from "@/gql/graphql";
import { AddProductToCartButton } from "@/ui/atoms/AddProductToCartButton";
import { SingleProductInfo } from "@/ui/atoms/SingleProductInfo";
import { SingleProductLongDescription } from "@/ui/atoms/SingleProductLongDescription";

type ProductInformationProps = {
	product: ProductsListItemFragment;
};

export const ProductInformation = ({ product }: ProductInformationProps) => {
	const addProductToCartAction = async () => {
		"use server";

		const cart = await getOrCreateCart();

		if (!cart.items.some((item) => item.product.id === product.id)) {
			await cartAddItem(cart.id, product.id, 1);
		}

		revalidateTag("cart");
	};

	return (
		<form action={addProductToCartAction} className="flex flex-col items-start gap-6 text-gray-600">
			<SingleProductInfo product={product} />
			<SingleProductLongDescription product={product} />
			<AddProductToCartButton />
		</form>
	);
};
