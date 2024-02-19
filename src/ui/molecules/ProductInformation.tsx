import { type ProductItemResponse } from "@/types";
import { SingleProductInfo } from "@/ui/atoms/SingleProductInfo";
import { SingleProductLongDescription } from "@/ui/atoms/SingleProductLongDescription";

export const ProductInformation = ({ product }: { product: ProductItemResponse }) => {
	return (
		<article className="flex flex-col gap-6 text-gray-600">
			<SingleProductInfo product={product} />
			<SingleProductLongDescription product={product} />
		</article>
	);
};
