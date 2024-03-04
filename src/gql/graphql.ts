/* eslint-disable */
import type { DocumentTypeDecoration } from "@graphql-typed-document-node/core";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = {
	[_ in K]?: never;
};
export type Incremental<T> =
	| T
	| { [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: { input: string; output: string };
	String: { input: string; output: string };
	Boolean: { input: boolean; output: boolean };
	Int: { input: number; output: number };
	Float: { input: number; output: number };
	/** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
	DateTime: { input: unknown; output: unknown };
	/** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
	JSON: { input: unknown; output: unknown };
};

export type Cart = {
	id: Scalars["ID"]["output"];
	items: Array<CartItem>;
};

export type CartItem = {
	product: Product;
	quantity: Scalars["Int"]["output"];
};

export type CartItemInput = {
	productId: Scalars["String"]["input"];
	quantity?: InputMaybe<Scalars["Int"]["input"]>;
};

export type Category = {
	description: Scalars["String"]["output"];
	id: Scalars["ID"]["output"];
	name: Scalars["String"]["output"];
	products: Array<Product>;
	slug: Scalars["String"]["output"];
};

export type CategoryList = {
	data: Array<Category>;
	meta: ListMeta;
};

export type Collection = {
	description: Scalars["String"]["output"];
	id: Scalars["ID"]["output"];
	name: Scalars["String"]["output"];
	products: Array<Product>;
	slug: Scalars["String"]["output"];
};

export type CollectionList = {
	data: Array<Collection>;
	meta: ListMeta;
};

export type ListMeta = {
	/** The total number of items matching the query */
	count: Scalars["Int"]["output"];
	/** The total number of items in the database */
	total: Scalars["Int"]["output"];
};

export type Mutation = {
	cartAddItem: Cart;
	cartChangeItemQuantity: Cart;
	cartComplete: Order;
	cartFindOrCreate: Cart;
	cartRemoveItem: Cart;
	reviewCreate: Cart;
};

export type MutationCartAddItemArgs = {
	id: Scalars["ID"]["input"];
	input: MutationCartAddItemInput;
};

export type MutationCartChangeItemQuantityArgs = {
	id: Scalars["ID"]["input"];
	productId: Scalars["ID"]["input"];
	quantity: Scalars["Int"]["input"];
};

export type MutationCartCompleteArgs = {
	cartId: Scalars["ID"]["input"];
};

export type MutationCartFindOrCreateArgs = {
	id?: InputMaybe<Scalars["ID"]["input"]>;
	input: MutationCartFindOrCreateInput;
};

export type MutationCartRemoveItemArgs = {
	id: Scalars["ID"]["input"];
	productId: Scalars["ID"]["input"];
};

export type MutationReviewCreateArgs = {
	author: Scalars["String"]["input"];
	description: Scalars["String"]["input"];
	email: Scalars["String"]["input"];
	productId: Scalars["ID"]["input"];
	rating: Scalars["Int"]["input"];
	title: Scalars["String"]["input"];
};

export type MutationCartAddItemInput = {
	item: CartItemInput;
};

export type MutationCartFindOrCreateInput = {
	items?: InputMaybe<Array<CartItemInput>>;
};

export type Order = {
	createdAt: Scalars["DateTime"]["output"];
	id: Scalars["ID"]["output"];
	lines: Scalars["JSON"]["output"];
	status: OrderStatus;
	totalAmount: Scalars["Int"]["output"];
	updatedAt: Scalars["DateTime"]["output"];
};

export type OrderList = {
	data: Array<Order>;
	meta: ListMeta;
};

export type OrderSortBy = "DEFAULT" | "STATUS" | "TOTAL";

export type OrderStatus = "CANCELLED" | "CREATED" | "FULFILLED" | "PAID";

export type Product = {
	categories: Array<Category>;
	collections: Array<Collection>;
	description: Scalars["String"]["output"];
	id: Scalars["ID"]["output"];
	images: Array<ProductImage>;
	name: Scalars["String"]["output"];
	price: Scalars["Int"]["output"];
	rating?: Maybe<Scalars["Float"]["output"]>;
	reviews: Array<Review>;
	slug: Scalars["String"]["output"];
};

export type ProductImage = {
	alt: Scalars["String"]["output"];
	height: Scalars["Int"]["output"];
	id: Scalars["ID"]["output"];
	url: Scalars["String"]["output"];
	width: Scalars["Int"]["output"];
};

export type ProductList = {
	data: Array<Product>;
	meta: ListMeta;
};

export type ProductSortBy = "DEFAULT" | "NAME" | "PRICE" | "RATING";

export type Query = {
	cart?: Maybe<Cart>;
	categories: CategoryList;
	category?: Maybe<Category>;
	collection?: Maybe<Collection>;
	collections: CollectionList;
	order?: Maybe<Order>;
	orders: OrderList;
	product?: Maybe<Product>;
	products: ProductList;
};

export type QueryCartArgs = {
	id: Scalars["ID"]["input"];
};

export type QueryCategoriesArgs = {
	skip?: Scalars["Int"]["input"];
	take?: Scalars["Int"]["input"];
};

export type QueryCategoryArgs = {
	id?: InputMaybe<Scalars["ID"]["input"]>;
	slug?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryCollectionArgs = {
	id?: InputMaybe<Scalars["ID"]["input"]>;
	slug?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryCollectionsArgs = {
	skip?: Scalars["Int"]["input"];
	take?: Scalars["Int"]["input"];
};

export type QueryOrderArgs = {
	id: Scalars["ID"]["input"];
};

export type QueryOrdersArgs = {
	email: Scalars["String"]["input"];
	order?: SortDirection;
	orderBy?: OrderSortBy;
	skip?: Scalars["Int"]["input"];
	take?: Scalars["Int"]["input"];
};

export type QueryProductArgs = {
	id?: InputMaybe<Scalars["ID"]["input"]>;
	slug?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryProductsArgs = {
	order?: SortDirection;
	orderBy?: ProductSortBy;
	search?: InputMaybe<Scalars["String"]["input"]>;
	skip?: Scalars["Int"]["input"];
	take?: Scalars["Int"]["input"];
};

export type Review = {
	author: Scalars["String"]["output"];
	createdAt: Scalars["DateTime"]["output"];
	description: Scalars["String"]["output"];
	email: Scalars["String"]["output"];
	id: Scalars["ID"]["output"];
	product: Product;
	rating: Scalars["Float"]["output"];
	title: Scalars["String"]["output"];
	updatedAt: Scalars["DateTime"]["output"];
};

export type ReviewList = {
	data: Array<Review>;
	meta: ListMeta;
};

export type SortDirection = "ASC" | "DESC";

export type CategoriesGetItemsBySlugQueryVariables = Exact<{
	slug?: InputMaybe<Scalars["String"]["input"]>;
}>;

export type CategoriesGetItemsBySlugQuery = {
	category?: {
		id: string;
		name: string;
		description: string;
		slug: string;
		products: Array<{
			id: string;
			name: string;
			price: number;
			description: string;
			images: Array<{ url: string }>;
			categories: Array<{ name: string; description: string }>;
		}>;
	} | null;
};

export type CategoriesGetListQueryVariables = Exact<{ [key: string]: never }>;

export type CategoriesGetListQuery = {
	categories: { data: Array<{ id: string; description: string; name: string; slug: string }> };
};

export type CategoryListItemFragment = {
	id: string;
	name: string;
	slug: string;
	description: string;
};

export type CollectionGetItemBySlugQueryVariables = Exact<{
	slug?: InputMaybe<Scalars["String"]["input"]>;
}>;

export type CollectionGetItemBySlugQuery = {
	collection?: {
		id: string;
		description: string;
		name: string;
		products: Array<{
			id: string;
			name: string;
			description: string;
			price: number;
			rating?: number | null;
			images: Array<{ url: string }>;
			categories: Array<{ name: string; description: string }>;
		}>;
	} | null;
};

export type CollectionListItemFragment = { id: string; name: string; slug: string };

export type CollectionsGetListQueryVariables = Exact<{
	take?: InputMaybe<Scalars["Int"]["input"]>;
}>;

export type CollectionsGetListQuery = {
	collections: { data: Array<{ id: string; name: string; slug: string }> };
};

export type ProductGetItemByIdQueryVariables = Exact<{
	id: Scalars["ID"]["input"];
}>;

export type ProductGetItemByIdQuery = {
	product?: {
		id: string;
		name: string;
		description: string;
		price: number;
		rating?: number | null;
		images: Array<{ url: string }>;
		categories: Array<{ name: string; description: string }>;
	} | null;
};

export type ProductsListItemFragment = {
	id: string;
	name: string;
	price: number;
	description: string;
	rating?: number | null;
	images: Array<{ url: string }>;
	categories: Array<{ name: string; description: string }>;
};

export type ProductsGetListQueryVariables = Exact<{
	take?: InputMaybe<Scalars["Int"]["input"]>;
	skip?: InputMaybe<Scalars["Int"]["input"]>;
}>;

export type ProductsGetListQuery = {
	products: {
		data: Array<{
			id: string;
			name: string;
			price: number;
			description: string;
			rating?: number | null;
			images: Array<{ url: string }>;
			categories: Array<{ name: string; description: string }>;
		}>;
	};
};

export type ProductsGetListByFilteredCategoryQueryVariables = Exact<{
	take: Scalars["Int"]["input"];
}>;

export type ProductsGetListByFilteredCategoryQuery = {
	products: {
		data: Array<{
			id: string;
			name: string;
			price: number;
			description: string;
			rating?: number | null;
			images: Array<{ url: string }>;
			categories: Array<{ name: string; description: string }>;
		}>;
	};
};

export type ProductsGetListLengthQueryVariables = Exact<{ [key: string]: never }>;

export type ProductsGetListLengthQuery = { products: { meta: { total: number } } };

export class TypedDocumentString<TResult, TVariables>
	extends String
	implements DocumentTypeDecoration<TResult, TVariables>
{
	__apiType?: DocumentTypeDecoration<TResult, TVariables>["__apiType"];

	constructor(
		private value: string,
		public __meta__?: Record<string, any>,
	) {
		super(value);
	}

	toString(): string & DocumentTypeDecoration<TResult, TVariables> {
		return this.value;
	}
}
export const CategoryListItemFragmentDoc = new TypedDocumentString(
	`
    fragment CategoryListItem on Category {
  id
  name
  slug
  description
}
    `,
	{ fragmentName: "CategoryListItem" },
) as unknown as TypedDocumentString<CategoryListItemFragment, unknown>;
export const CollectionListItemFragmentDoc = new TypedDocumentString(
	`
    fragment CollectionListItem on Collection {
  id
  name
  slug
}
    `,
	{ fragmentName: "CollectionListItem" },
) as unknown as TypedDocumentString<CollectionListItemFragment, unknown>;
export const ProductsListItemFragmentDoc = new TypedDocumentString(
	`
    fragment ProductsListItem on Product {
  id
  name
  price
  description
  rating
  images {
    url
  }
  categories {
    name
    description
  }
}
    `,
	{ fragmentName: "ProductsListItem" },
) as unknown as TypedDocumentString<ProductsListItemFragment, unknown>;
export const CategoriesGetItemsBySlugDocument = new TypedDocumentString(`
    query CategoriesGetItemsBySlug($slug: String) {
  category(slug: $slug) {
    id
    name
    description
    slug
    products {
      id
      name
      price
      description
      images {
        url
      }
      categories {
        name
        description
      }
    }
  }
}
    `) as unknown as TypedDocumentString<
	CategoriesGetItemsBySlugQuery,
	CategoriesGetItemsBySlugQueryVariables
>;
export const CategoriesGetListDocument = new TypedDocumentString(`
    query CategoriesGetList {
  categories {
    data {
      id
      description
      name
      slug
    }
  }
}
    `) as unknown as TypedDocumentString<CategoriesGetListQuery, CategoriesGetListQueryVariables>;
export const CollectionGetItemBySlugDocument = new TypedDocumentString(`
    query CollectionGetItemBySlug($slug: String) {
  collection(slug: $slug) {
    id
    description
    name
    products {
      id
      name
      description
      price
      rating
      images {
        url
      }
      categories {
        name
        description
      }
    }
  }
}
    `) as unknown as TypedDocumentString<
	CollectionGetItemBySlugQuery,
	CollectionGetItemBySlugQueryVariables
>;
export const CollectionsGetListDocument = new TypedDocumentString(`
    query CollectionsGetList($take: Int) {
  collections(take: $take) {
    data {
      id
      name
      slug
    }
  }
}
    `) as unknown as TypedDocumentString<CollectionsGetListQuery, CollectionsGetListQueryVariables>;
export const ProductGetItemByIdDocument = new TypedDocumentString(`
    query ProductGetItemById($id: ID!) {
  product(id: $id) {
    id
    name
    description
    price
    rating
    images {
      url
    }
    categories {
      name
      description
    }
  }
}
    `) as unknown as TypedDocumentString<ProductGetItemByIdQuery, ProductGetItemByIdQueryVariables>;
export const ProductsGetListDocument = new TypedDocumentString(`
    query ProductsGetList($take: Int, $skip: Int) {
  products(take: $take, skip: $skip) {
    data {
      id
      name
      price
      description
      rating
      images {
        url
      }
      categories {
        name
        description
      }
    }
  }
}
    `) as unknown as TypedDocumentString<ProductsGetListQuery, ProductsGetListQueryVariables>;
export const ProductsGetListByFilteredCategoryDocument = new TypedDocumentString(`
    query ProductsGetListByFilteredCategory($take: Int!) {
  products(take: $take) {
    data {
      id
      name
      price
      description
      rating
      images {
        url
      }
      categories {
        name
        description
      }
    }
  }
}
    `) as unknown as TypedDocumentString<
	ProductsGetListByFilteredCategoryQuery,
	ProductsGetListByFilteredCategoryQueryVariables
>;
export const ProductsGetListLengthDocument = new TypedDocumentString(`
    query ProductsGetListLength {
  products {
    meta {
      total
    }
  }
}
    `) as unknown as TypedDocumentString<
	ProductsGetListLengthQuery,
	ProductsGetListLengthQueryVariables
>;
