import "server-only";

import NextImage from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { formatMoney } from "@/utils/formatMoney";
import { ProductQuantity } from "@/ui/molecules/ProductQuantity";
import { getCartByIdFromCookie } from "@/api/cart";
import { RemoveProductFromCartButton } from "@/ui/atoms/RemoveProductFromCartButton";

const tHead = [
	{
		id: 1,
		name: "",
	},
	{
		id: 2,
		name: "Product name",
	},
	{
		id: 3,
		name: "Quantity",
	},
	{
		id: 4,
		name: "Price",
	},
	{
		id: 5,
		name: "",
	},
];

export const CartProductsTable = async () => {
	const cart = await getCartByIdFromCookie();

	if (!cart || cart.items.length === 0) {
		redirect("/");
	}

	return (
		<table className="mx-auto mt-12 w-full table-fixed text-center">
			<thead>
				<tr className="mx-auto">
					{tHead.map((th) => (
						<th key={th.id} className="text-blue-500">
							{th.name}
						</th>
					))}
				</tr>
			</thead>
			<tbody>
				{cart.items.map(
					(item) =>
						cart.items && (
							<tr key={item.product.id} className="border-b text-gray-500">
								<td className="flex items-center justify-center ">
									<Link href={`/product/${item.product.id}`}>
										<NextImage
											src={item.product.images[0].url}
											alt={item.product.images[0].alt}
											width={125}
											height={225}
											className="cursor-pointer p-2 transition duration-300 ease-in-out hover:scale-105"
										/>
									</Link>
								</td>
								<td>{item.product.name}</td>
								<td>
									<ProductQuantity
										quantity={item.quantity}
										cartId={cart.id}
										productId={item.product.id}
									/>
								</td>
								<td>{formatMoney(item.product.price)}</td>
								<td>
									<RemoveProductFromCartButton cartId={cart.id} productId={item.product.id} />
								</td>
							</tr>
						),
				)}
			</tbody>
		</table>
	);
};
