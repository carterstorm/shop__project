import { revalidateTag } from "next/cache";
import { cartAddItem, getOrCreateCart } from "@/api/cart";
import { type ProductsListItemFragment } from "@/gql/graphql";
import { FormButton } from "@/ui/atoms/FormButton";
import { SingleProductInfo } from "@/ui/atoms/SingleProductInfo";
import { SingleProductLongDescription } from "@/ui/atoms/SingleProductLongDescription";
import { changeProductQuantity } from "@/app/cart/actions";
import { ProductPageQuantity } from "@/ui/molecules/ProductPageQuantity";

type ProductInformationProps = {
	product: ProductsListItemFragment;
};

export const ProductInformation = async ({ product }: ProductInformationProps) => {
	const addProductToCartAction = async (formData: FormData) => {
		"use server";

		const cart = await getOrCreateCart();
		const quantity = Number(formData.get("quantity"));
		const item = cart.items.find((item) => item.product.id === product.id);

		if (item) {
			await changeProductQuantity(cart.id, product.id, item.quantity + quantity);
		} else {
			await cartAddItem(cart.id, product.id, quantity);
		}

		revalidateTag("cart");
	};

	return (
		<form action={addProductToCartAction} className="flex flex-col items-start gap-6 text-gray-600">
			<SingleProductInfo product={product} />
			<SingleProductLongDescription product={product} />
			<div className="flex items-center gap-4">
				<ProductPageQuantity />
				<FormButton buttonText="Add to cart" />
			</div>
		</form>
	);
};
