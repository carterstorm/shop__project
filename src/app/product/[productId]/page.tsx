import { Suspense } from "react";
import { type Metadata } from "next";
import { SinglePageProductImage } from "@/ui/atoms/SinglePageProductImage";
import { ProductInformation } from "@/ui/molecules/ProductInformation";
import { SuggestedProducts } from "@/ui/organisms/SuggestedProducts";
import { getProductById } from "@/api/product";

type SingleProductPageProps = {
	params: {
		productId: string;
	};
};

export const generateMetadata = async ({
	params,
}: {
	params: { productId: string };
}): Promise<Metadata> => {
	const product = await getProductById(params.productId);

	return {
		title: `${product.title}`,
		description: `${product.description}`,
		openGraph: {
			title: `${product.title}`,
			description: `${product.description}`,
			images: [
				{
					url: `${product.image}`,
					alt: `${product.title}`,
				},
			],
		},
	};
};

export default async function SingleProductPage({ params }: SingleProductPageProps) {
	const product = await getProductById(params.productId);

	return (
		<section>
			<div className="grid grid-cols-2 gap-8">
				<SinglePageProductImage product={product} />
				<ProductInformation product={product} />
			</div>
			<Suspense>
				<SuggestedProducts />
			</Suspense>
		</section>
	);
}
