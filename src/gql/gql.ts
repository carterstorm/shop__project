/* eslint-disable */
import * as types from './graphql';



/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "mutation CartAddItem($cartId: ID!, $productId: String!, $quantity: Int!) {\n  cartAddItem(\n    id: $cartId\n    input: {item: {productId: $productId, quantity: $quantity}}\n  ) {\n    id\n  }\n}": types.CartAddItemDocument,
    "mutation CartChangeItemQuantity($id: ID!, $productId: ID!, $quantity: Int!) {\n  cartChangeItemQuantity(id: $id, productId: $productId, quantity: $quantity) {\n    id\n  }\n}": types.CartChangeItemQuantityDocument,
    "mutation CartCreate($id: ID) {\n  cartFindOrCreate(id: $id, input: {}) {\n    ...CartItem\n  }\n}": types.CartCreateDocument,
    "query CartGetById($id: ID!) {\n  cart(id: $id) {\n    ...CartItem\n  }\n}": types.CartGetByIdDocument,
    "fragment CartItem on Cart {\n  id\n  items {\n    product {\n      id\n      name\n      price\n      images {\n        url\n        alt\n      }\n    }\n    quantity\n  }\n}": types.CartItemFragmentDoc,
    "query CategoriesGetItemsBySlug($slug: String) {\n  category(slug: $slug) {\n    id\n    name\n    description\n    slug\n    products {\n      id\n      name\n      price\n      description\n      images {\n        url\n      }\n      categories {\n        name\n        description\n      }\n    }\n  }\n}": types.CategoriesGetItemsBySlugDocument,
    "query CategoriesGetList {\n  categories {\n    data {\n      id\n      description\n      name\n      slug\n    }\n  }\n}": types.CategoriesGetListDocument,
    "fragment CategoryListItem on Category {\n  id\n  name\n  slug\n  description\n}": types.CategoryListItemFragmentDoc,
    "query CollectionGetItemBySlug($slug: String) {\n  collection(slug: $slug) {\n    id\n    description\n    name\n    products {\n      id\n      name\n      description\n      price\n      rating\n      images {\n        url\n      }\n      categories {\n        name\n        description\n      }\n    }\n  }\n}": types.CollectionGetItemBySlugDocument,
    "fragment CollectionListItem on Collection {\n  id\n  name\n  slug\n}": types.CollectionListItemFragmentDoc,
    "query CollectionsGetList($take: Int) {\n  collections(take: $take) {\n    data {\n      id\n      name\n      slug\n    }\n  }\n}": types.CollectionsGetListDocument,
    "query ProductGetItemById($id: ID!) {\n  product(id: $id) {\n    id\n    name\n    description\n    price\n    rating\n    images {\n      url\n    }\n    categories {\n      name\n      description\n    }\n  }\n}": types.ProductGetItemByIdDocument,
    "fragment ProductsListItem on Product {\n  id\n  name\n  price\n  description\n  rating\n  images {\n    url\n  }\n  categories {\n    name\n    description\n  }\n}": types.ProductsListItemFragmentDoc,
    "query ProductsGetList($take: Int, $skip: Int) {\n  products(take: $take, skip: $skip) {\n    data {\n      id\n      name\n      price\n      description\n      rating\n      images {\n        url\n      }\n      categories {\n        name\n        description\n      }\n    }\n  }\n}": types.ProductsGetListDocument,
    "query ProductsGetListByFilteredCategory($take: Int!) {\n  products(take: $take) {\n    data {\n      id\n      name\n      price\n      description\n      rating\n      images {\n        url\n      }\n      categories {\n        name\n        description\n      }\n    }\n  }\n}": types.ProductsGetListByFilteredCategoryDocument,
    "query ProductsGetListBySearch($search: String) {\n  products(search: $search) {\n    data {\n      id\n      name\n      price\n      description\n      rating\n      images {\n        url\n      }\n      categories {\n        name\n        description\n      }\n    }\n  }\n}": types.ProductsGetListBySearchDocument,
    "query ProductsGetListLength {\n  products {\n    meta {\n      total\n    }\n  }\n}": types.ProductsGetListLengthDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartAddItem($cartId: ID!, $productId: String!, $quantity: Int!) {\n  cartAddItem(\n    id: $cartId\n    input: {item: {productId: $productId, quantity: $quantity}}\n  ) {\n    id\n  }\n}"): typeof import('./graphql').CartAddItemDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartChangeItemQuantity($id: ID!, $productId: ID!, $quantity: Int!) {\n  cartChangeItemQuantity(id: $id, productId: $productId, quantity: $quantity) {\n    id\n  }\n}"): typeof import('./graphql').CartChangeItemQuantityDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartCreate($id: ID) {\n  cartFindOrCreate(id: $id, input: {}) {\n    ...CartItem\n  }\n}"): typeof import('./graphql').CartCreateDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CartGetById($id: ID!) {\n  cart(id: $id) {\n    ...CartItem\n  }\n}"): typeof import('./graphql').CartGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment CartItem on Cart {\n  id\n  items {\n    product {\n      id\n      name\n      price\n      images {\n        url\n        alt\n      }\n    }\n    quantity\n  }\n}"): typeof import('./graphql').CartItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CategoriesGetItemsBySlug($slug: String) {\n  category(slug: $slug) {\n    id\n    name\n    description\n    slug\n    products {\n      id\n      name\n      price\n      description\n      images {\n        url\n      }\n      categories {\n        name\n        description\n      }\n    }\n  }\n}"): typeof import('./graphql').CategoriesGetItemsBySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CategoriesGetList {\n  categories {\n    data {\n      id\n      description\n      name\n      slug\n    }\n  }\n}"): typeof import('./graphql').CategoriesGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment CategoryListItem on Category {\n  id\n  name\n  slug\n  description\n}"): typeof import('./graphql').CategoryListItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CollectionGetItemBySlug($slug: String) {\n  collection(slug: $slug) {\n    id\n    description\n    name\n    products {\n      id\n      name\n      description\n      price\n      rating\n      images {\n        url\n      }\n      categories {\n        name\n        description\n      }\n    }\n  }\n}"): typeof import('./graphql').CollectionGetItemBySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment CollectionListItem on Collection {\n  id\n  name\n  slug\n}"): typeof import('./graphql').CollectionListItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CollectionsGetList($take: Int) {\n  collections(take: $take) {\n    data {\n      id\n      name\n      slug\n    }\n  }\n}"): typeof import('./graphql').CollectionsGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetItemById($id: ID!) {\n  product(id: $id) {\n    id\n    name\n    description\n    price\n    rating\n    images {\n      url\n    }\n    categories {\n      name\n      description\n    }\n  }\n}"): typeof import('./graphql').ProductGetItemByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductsListItem on Product {\n  id\n  name\n  price\n  description\n  rating\n  images {\n    url\n  }\n  categories {\n    name\n    description\n  }\n}"): typeof import('./graphql').ProductsListItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetList($take: Int, $skip: Int) {\n  products(take: $take, skip: $skip) {\n    data {\n      id\n      name\n      price\n      description\n      rating\n      images {\n        url\n      }\n      categories {\n        name\n        description\n      }\n    }\n  }\n}"): typeof import('./graphql').ProductsGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetListByFilteredCategory($take: Int!) {\n  products(take: $take) {\n    data {\n      id\n      name\n      price\n      description\n      rating\n      images {\n        url\n      }\n      categories {\n        name\n        description\n      }\n    }\n  }\n}"): typeof import('./graphql').ProductsGetListByFilteredCategoryDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetListBySearch($search: String) {\n  products(search: $search) {\n    data {\n      id\n      name\n      price\n      description\n      rating\n      images {\n        url\n      }\n      categories {\n        name\n        description\n      }\n    }\n  }\n}"): typeof import('./graphql').ProductsGetListBySearchDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetListLength {\n  products {\n    meta {\n      total\n    }\n  }\n}"): typeof import('./graphql').ProductsGetListLengthDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
