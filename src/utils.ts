import { apiURL } from "@/constants";
import { type ProductItemResponse, type ProductItemType } from "@/types";

export const formatMoney = (price: number, currency: string) => {
	return new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: currency,
	}).format(price / 100);
};

export const getProductsList = async () => {
	const response = await fetch(`${apiURL}/products?take=20`);
	const productsResponse = (await response.json()) as ProductItemResponse[];
	const products = productsResponse.map(
		(product): ProductItemType => ({
			id: product.id,
			name: product.title,
			category: product.category,
			price: product.price,
			coveredImage: {
				alt: product.title,
				src: product.image,
			},
		}),
	);
	return products;
};
