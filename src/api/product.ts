import { apiURL } from "@/constants";
import { type ProductItemResponse } from "@/types";

export const getProductById = async (id: ProductItemResponse["id"]) => {
	const response = await fetch(`${apiURL}/products/${id}`);

	if (!response.ok) {
		throw new Error("Failed to fetch product");
	}

	const product = (await response.json()) as ProductItemResponse;

	return product;
};
