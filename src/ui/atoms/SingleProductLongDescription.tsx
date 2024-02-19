import { type ProductItemResponse } from "@/types";

export const SingleProductLongDescription = ({ product }: { product: ProductItemResponse }) => {
	return <p>{product.longDescription}</p>;
};
