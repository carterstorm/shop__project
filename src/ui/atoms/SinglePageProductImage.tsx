import NextImage from "next/image";
import { type ProductsListItemFragment } from "@/gql/graphql";

export const SinglePageProductImage = ({ product }: { product: ProductsListItemFragment }) => {
	return (
		<div className="flex justify-center">
			<NextImage
				src={product.images[0].url}
				alt={product.name}
				className="w-96 rounded-lg object-contain"
			/>
		</div>
	);
};
