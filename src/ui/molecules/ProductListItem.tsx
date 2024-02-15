import { type ProductItemType } from "@/types";
import { ProductCoverImage } from "@/ui/atoms/ProductCoverImage";
import { ProductDescription } from "@/ui/atoms/ProductDescription";

type ProductListItemProps = {
	product: ProductItemType;
};

export const ProductListItem = ({ product }: ProductListItemProps) => {
	return (
		<li>
			<article>
				<ProductCoverImage alt={product.coveredImage.alt} src={product.coveredImage.src} />
				<ProductDescription product={product} />
			</article>
		</li>
	);
};
