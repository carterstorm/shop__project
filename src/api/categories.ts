import { CategoriesGetListDocument } from "@/gql/graphql";
import { executeGraphQL } from "@/utils/executeGraphQL";

export const getCategoriesList = async () => {
	const graphqlResponse = await executeGraphQL(CategoriesGetListDocument);

	if (!graphqlResponse) {
		throw new Error("Failed to fetch categories");
	}

	return graphqlResponse.categories.data;
};
