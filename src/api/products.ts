import { ProductsGetListDocument } from "@/gql/graphql";
import { executeGraphQL } from "@/utils/executeGraphQL";

// export const getNumberOfAllPages = async (numberOfProductsByPage: number) => {
// 	const response = await fetch(`${apiURL}/products?take=-1`);

// 	if (!response.ok) {
// 		throw new Error("Failed to fetch products");
// 	}

// 	const products = (await response.json()) as ProductItemResponse[];

// 	const numberOfAllProducts = products.length;
// 	const numberOfAllPages = Math.ceil(numberOfAllProducts / numberOfProductsByPage);

// 	return numberOfAllPages;
// };

// export const getProductsListByPageNumber = async (pageNumber = 1, numberOfProductsByPage = 20) => {
// 	const response = await fetch(
// 		`${apiURL}/products?take=${numberOfProductsByPage}&offset=${(pageNumber - 1) * numberOfProductsByPage}`,
// 	);

// 	if (!response.ok) {
// 		throw new Error("Failed to fetch products");
// 	}

// 	const products = (await response.json()) as ProductItemResponse[];

// 	return products;
// };

export const getProductsList = async (take: number) => {
	const graphqlResponse = await executeGraphQL(ProductsGetListDocument, { take: take });

	if (!graphqlResponse) {
		throw new Error("Failed to fetch products");
	}

	return graphqlResponse.products;
};
