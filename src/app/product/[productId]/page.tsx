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
import { Reviews } from "@/ui/organisms/Reviews";
import { getAllReviewsByProductId } from "@/api/review";

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
	};
};

export default async function SingleProductPage({ params }: SingleProductPageProps) {
	const product = await getProductById(params.productId);
	const { numberOfAllProducts } = await getNumberOfAllProductsAndAllPages();
	const reviews = await getAllReviewsByProductId(params.productId);

	if (!product) {
		return notFound();
	}

	if (!reviews) {
		return;
	}

	const filteredSuggestedProducts = await getSuggestedProductsListByFilteredCategory(
		numberOfAllProducts,
		product,
	);

	return (
		<section className="mx-auto lg:max-w-7xl lg:px-0">
			<section className="grid grid-cols-2 gap-8">
				<SinglePageProductImage product={product} />
				<ProductInformation product={product} />
			</section>
			<Suspense>
				<SuggestedProducts suggestedProducts={filteredSuggestedProducts} />
			</Suspense>
			<Reviews reviews={reviews} productId={params.productId} />
		</section>
	);
}
