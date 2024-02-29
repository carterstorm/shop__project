import { type ProductsListItemFragment } from "@/gql/graphql";
import { ProductListItem } from "@/ui/molecules/ProductListItem";

type ProductListProps = {
	products: ProductsListItemFragment[];
};

export const ProductList = ({ products }: ProductListProps) => {
	return (
		<ul
			className="mx-auto my-8 grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:max-w-7xl lg:grid-cols-4 lg:px-0"
			data-testid="products-list"
		>
			{products.map((product) => (
				<ProductListItem key={product.id} product={product} />
			))}
		</ul>
	);
};
