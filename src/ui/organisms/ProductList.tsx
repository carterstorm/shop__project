import { type ProductItemResponse } from "@/types";
import { ProductListItem } from "@/ui/molecules/ProductListItem";

type ProductListProps = {
	products: ProductItemResponse[];
};

export const ProductList = ({ products }: ProductListProps) => {
	return (
		<ul
			className="my-8 grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
			data-testid="products-list"
		>
			{products.map((product) => (
				<ProductListItem key={product.id} product={product} />
			))}
		</ul>
	);
};