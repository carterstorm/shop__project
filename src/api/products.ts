import { numberOfAllProductsByPage } from "@/constants";
import {
	ProductsGetListByFilteredCategoryDocument,
	ProductsGetListDocument,
	ProductsGetListLengthDocument,
	type ProductsListItemFragment,
} from "@/gql/graphql";
import { executeGraphQL } from "@/utils/executeGraphQL";

export const getNumberOfAllProductsAndAllPages = async () => {
	const graphqlResponse = await executeGraphQL(ProductsGetListLengthDocument);

	if (!graphqlResponse) {
		throw new Error("Failed to fetch number of all pages and all products");
	}

	const numberOfAllProducts = graphqlResponse.products.meta.total;
	const numberOfAllPages = Math.ceil(numberOfAllProducts / numberOfAllProductsByPage);
	return { numberOfAllProducts, numberOfAllPages };
};

export const getProductsList = async (take: number = 4, skip: number = 0) => {
	const graphqlResponse = await executeGraphQL(ProductsGetListDocument, {
		take,
		skip,
	});

	if (!graphqlResponse) {
		throw new Error("Failed to fetch products");
	}

	return graphqlResponse.products.data;
};

export const getSuggestedProductsListByFilteredCategory = async (
	take: number,
	product: ProductsListItemFragment,
) => {
	const graphqlResponse = await executeGraphQL(ProductsGetListByFilteredCategoryDocument, { take });

	if (!graphqlResponse) {
		throw new Error("Failed to fetch suggested products by category");
	}

	const filteredSuggestedProducts = graphqlResponse.products.data.filter(
		(suggestedProduct: ProductsListItemFragment) =>
			suggestedProduct.categories[0].name === product.categories[0].name,
	);

	return filteredSuggestedProducts;
};
