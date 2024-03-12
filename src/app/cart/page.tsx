import { PageHeaderHeading } from "@/ui/atoms/PageHeaderHeading";
import { PageHeader } from "@/ui/molecules/PageHeader";
import { CartProductsTable } from "@/ui/molecules/CartProductsTable";

export default async function CartPage() {
	return (
		<section className="mx-auto lg:max-w-7xl lg:px-0">
			<PageHeader>
				<PageHeaderHeading>Cart</PageHeaderHeading>
			</PageHeader>
			<CartProductsTable />
		</section>
	);
}
