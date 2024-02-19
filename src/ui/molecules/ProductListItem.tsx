import Link from "next/link";
import { type ProductItemResponse } from "@/types";
import { ProductCoverImage } from "@/ui/atoms/ProductCoverImage";
import { ProductDescription } from "@/ui/atoms/ProductDescription";

type ProductListItemProps = {
	product: ProductItemResponse;
};

export const ProductListItem = ({ product }: ProductListItemProps) => {
	return (
		<li>
			<Link href={{ pathname: `/product/${product.id}` }}>
				<article>
					<ProductCoverImage alt={product.title} src={product.image} />
					<ProductDescription product={product} />
				</article>
			</Link>
		</li>
	);
};
