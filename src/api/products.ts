import { numberOfProductsByPage } from "@/constants";
import { ProductsGetListDocument, ProductsGetListLengthDocument } from "@/gql/graphql";
import { executeGraphQL } from "@/utils/executeGraphQL";

export const getNumberOfAllPages = async () => {
	const graphqlResponse = await executeGraphQL(ProductsGetListLengthDocument);

	if (!graphqlResponse) {
		throw new Error("Failed to fetch products");
	}

	const numberOfAllProducts = graphqlResponse.products.meta.total;
	const numberOfAllPages = Math.ceil(numberOfAllProducts / numberOfProductsByPage);
	return numberOfAllPages;
};

export const getProductsListByPageNumber = async (take: number = 4, skip: number = 0) => {
	const graphqlResponse = await executeGraphQL(ProductsGetListDocument, {
		take,
		skip,
	});

	if (!graphqlResponse) {
		throw new Error("Failed to fetch products");
	}

	return graphqlResponse.products.data;
};
