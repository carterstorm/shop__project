import { CategoriesGetItemsBySlugDocument, CategoriesGetListDocument } from "@/gql/graphql";
import { executeGraphQL } from "@/utils/executeGraphQL";

export const getCategoriesList = async () => {
	const graphqlResponse = await executeGraphQL({ query: CategoriesGetListDocument });

	if (!graphqlResponse) {
		throw new Error("Failed to fetch categories");
	}

	return graphqlResponse.categories.data;
};

export const getCategoriesBySlug = async (slug: string) => {
	const graphqlResponse = await executeGraphQL({
		query: CategoriesGetItemsBySlugDocument,
		variables: { slug },
		next: {
			revalidate: 60 * 60 * 24,
		},
	});

	if (!graphqlResponse) {
		throw new Error("Failed to fetch category");
	}

	return graphqlResponse.category;
};
