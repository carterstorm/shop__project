import Link from "next/link";
import { ProductListCoverImage } from "@/ui/atoms/ProductListCoverImage";
import { ProductListDescription } from "@/ui/atoms/ProductListDescription";
import { type ProductsListItemFragment } from "@/gql/graphql";

type ProductListItemProps = {
	product: ProductsListItemFragment;
};

export const ProductListItem = ({ product }: ProductListItemProps) => {
	return (
		<li>
			<Link href={`/product/${product.id}`}>
				<article>
					<ProductListCoverImage alt={product.name} src={product.images[0].url} />
					<ProductListDescription product={product} />
				</article>
			</Link>
		</li>
	);
};
