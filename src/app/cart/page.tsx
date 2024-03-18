import { PageHeaderHeading } from "@/ui/atoms/PageHeaderHeading";
import { PageHeader } from "@/ui/molecules/PageHeader";
import { CartProductsTable } from "@/ui/molecules/CartProductsTable";
import { handlePaymentAction } from "@/app/cart/actions";

export default async function CartPage() {
	return (
		<section className="mx-auto lg:max-w-7xl lg:px-0">
			<PageHeader>
				<PageHeaderHeading>Cart</PageHeaderHeading>
			</PageHeader>
			<CartProductsTable />
			<form action={handlePaymentAction}>
				<button className="flex h-14 w-32 items-center justify-center rounded-xl bg-blue-500 px-6 py-4 text-sm text-white transition-all hover:bg-blue-400  disabled:bg-blue-600">
					Pay now
				</button>
			</form>
		</section>
	);
}
