import { numberOfAllProductsByPage } from "@/constants";
import {
	ProductsGetListByFilteredCategoryDocument,
	ProductsGetListBySearchDocument,
	ProductsGetListDocument,
	ProductsGetListLengthDocument,
	type SortDirection,
	type ProductsListItemFragment,
	type ProductSortBy,
} from "@/gql/graphql";
import { executeGraphQL } from "@/utils/executeGraphQL";

export const getNumberOfAllProductsAndAllPages = async () => {
	const graphqlResponse = await executeGraphQL({ query: ProductsGetListLengthDocument });

	if (!graphqlResponse) {
		throw new Error("Failed to fetch number of all pages and all products");
	}

	const numberOfAllProducts = graphqlResponse.products.meta.total;
	const numberOfAllPages = Math.ceil(numberOfAllProducts / numberOfAllProductsByPage);

	return { numberOfAllProducts, numberOfAllPages };
};

export const getProductsList = async (
	take: number = 4,
	skip: number = 0,
	order?: SortDirection,
	orderBy?: ProductSortBy,
) => {
	const graphqlResponse = await executeGraphQL({
		query: ProductsGetListDocument,
		variables: { take, skip, order, orderBy },
		next: {
			revalidate: 10,
		},
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
	const graphqlResponse = await executeGraphQL({
		query: ProductsGetListByFilteredCategoryDocument,
		variables: { take },
	});

	if (!graphqlResponse) {
		throw new Error("Failed to fetch suggested products by category");
	}

	const filteredSuggestedProducts = graphqlResponse.products.data.filter(
		(suggestedProduct: ProductsListItemFragment) =>
			suggestedProduct.categories[0].name === product.categories[0].name &&
			suggestedProduct.id !== product.id,
	);

	return filteredSuggestedProducts;
};

export const getProductsListBySearchParams = async (search: string) => {
	if (!search || search.length < 2) {
		return [];
	}

	const graphqlResponse = await executeGraphQL({
		query: ProductsGetListBySearchDocument,
		variables: { search },
	});

	if (!graphqlResponse) {
		throw new Error("Failed to fetch");
	}

	const searchedProducts = graphqlResponse.products.data.filter((product) =>
		product.name.toLowerCase().includes(search.toLowerCase()),
	);

	return searchedProducts;
};
