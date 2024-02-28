import NextImage from "next/image";
import { type ProductsListItemFragment } from "@/gql/graphql";

type SinglePageProductImageProps = {
	product: ProductsListItemFragment;
};

export const SinglePageProductImage = ({ product }: SinglePageProductImageProps) => {
	return (
		<div className="flex justify-center">
			<NextImage
				width={400}
				height={400}
				src={product.images[0].url}
				alt={product.name}
				className="w-96 rounded-lg object-contain"
			/>
		</div>
	);
};
