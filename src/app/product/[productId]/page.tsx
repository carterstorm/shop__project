import { Suspense } from "react";
import { notFound } from "next/navigation";
import { type Metadata } from "next";
import { SinglePageProductImage } from "@/ui/atoms/SinglePageProductImage";
import { getProductById } from "@/api/product";
import { ProductInformation } from "@/ui/molecules/ProductInformation";
import {
	getNumberOfAllProductsAndAllPages,
	getSuggestedProductsListByFilteredCategory,
} from "@/api/products";
import { SuggestedProducts } from "@/ui/organisms/SuggestedProducts";

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

	if (!product) {
		return { title: "Product not found" };
	}

	return {
		title: `${product.name}`,
		description: `${product.description}`,
		openGraph: {
			title: `${product.name}`,
			description: `${product.description}`,
			images: [
				{
					url: `${product.images[0].url}`,
					alt: `${product.name}`,
				},
			],
		},
	};
};

export default async function SingleProductPage({ params }: SingleProductPageProps) {
	const product = await getProductById(params.productId);
	const { numberOfAllProducts } = await getNumberOfAllProductsAndAllPages();

	if (!product) {
		return notFound();
	}

	const filteredSuggestedProducts = await getSuggestedProductsListByFilteredCategory(
		numberOfAllProducts,
		product,
	);

	return (
		<section className="mx-auto lg:max-w-7xl lg:px-0">
			<div className="grid grid-cols-2 gap-8">
				<SinglePageProductImage product={product} />
				<ProductInformation product={product} />
			</div>
			<Suspense>
				<SuggestedProducts suggestedProducts={filteredSuggestedProducts} />
			</Suspense>
		</section>
	);
}
