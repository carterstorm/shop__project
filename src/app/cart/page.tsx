import { redirect } from "next/navigation";
import { PageHeaderHeading } from "@/ui/atoms/PageHeaderHeading";
import { PageHeader } from "@/ui/molecules/PageHeader";
import { CartProductsTable } from "@/ui/molecules/CartProductsTable";
import { handlePaymentAction } from "@/app/cart/actions";
import { getCartByIdFromCookie } from "@/api/cart";
import { formatMoney } from "@/utils/formatMoney";

export default async function CartPage() {
	const cart = await getCartByIdFromCookie();

	if (!cart || !cart.items.length) {
		redirect("/");
	}

	const totalPrice = cart.items.reduce((acc, item) => acc + item.quantity * item.product.price, 0);

	return (
		<section className="mx-auto lg:max-w-7xl lg:px-0">
			<PageHeader>
				<PageHeaderHeading>Cart</PageHeaderHeading>
			</PageHeader>
			<CartProductsTable />
			<form action={handlePaymentAction} className="mt-4 flex items-center justify-end gap-4">
				<span> Total price: {formatMoney(totalPrice)}</span>
				<button className="flex h-14 w-32 items-center justify-center rounded-xl bg-blue-500 px-6 py-4 text-sm text-white transition-all hover:bg-blue-400  disabled:bg-blue-600">
					Pay now
				</button>
			</form>
		</section>
	);
}
