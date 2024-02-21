import Link from "next/link";
import { type ProductItemResponse } from "@/types";
import { ProductListCoverImage } from "@/ui/atoms/ProductListCoverImage";
import { ProductListDescription } from "@/ui/atoms/ProductListDescription";

type ProductListItemProps = {
	product: ProductItemResponse;
};

export const ProductListItem = ({ product }: ProductListItemProps) => {
	return (
		<li>
			<Link href={`/product/${product.id}`}>
				<article>
					<ProductListCoverImage alt={product.title} src={product.image} />
					<ProductListDescription product={product} />
				</article>
			</Link>
		</li>
	);
};
