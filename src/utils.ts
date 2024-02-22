import { type ProductItemResponse } from "@/types";

const apiURL = process.env.API_URL;

export const formatMoney = (price: number, currency: string) => {
	return new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: currency,
	}).format(price / 100);
};

export const getNumberOfAllPages = async (numberOfProductsByPage: number) => {
	const response = await fetch(`${apiURL}/products?take=-1`);

	if (!response.ok) {
		throw new Error("Failed to fetch products");
	}

	const products = (await response.json()) as ProductItemResponse[];

	const numberOfAllProducts = products.length;
	const numberOfAllPages = Math.ceil(numberOfAllProducts / numberOfProductsByPage);

	return numberOfAllPages;
};

export const getProductsListByPageNumber = async (pageNumber = 1, numberOfProductsByPage = 20) => {
	const response = await fetch(
		`${apiURL}/products?take=${numberOfProductsByPage}&offset=${(pageNumber - 1) * numberOfProductsByPage}`,
	);

	if (!response.ok) {
		throw new Error("Failed to fetch products");
	}

	const products = (await response.json()) as ProductItemResponse[];

	return products;
};

export const getProductById = async (id: ProductItemResponse["id"]) => {
	const response = await fetch(`${apiURL}/products/${id}`);

	if (!response.ok) {
		throw new Error("Failed to fetch product");
	}

	const product = (await response.json()) as ProductItemResponse;

	return product;
};
