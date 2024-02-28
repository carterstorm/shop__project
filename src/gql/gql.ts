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
    "query ProductGetItemById($id: ID!) {\n  product(id: $id) {\n    id\n    name\n    description\n    price\n    rating\n    images {\n      url\n    }\n    categories {\n      name\n      description\n    }\n  }\n}": types.ProductGetItemByIdDocument,
    "fragment ProductsListItem on Product {\n  id\n  name\n  price\n  description\n  rating\n  images {\n    url\n  }\n  categories {\n    name\n    description\n  }\n}": types.ProductsListItemFragmentDoc,
    "query ProductsGetList($take: Int, $skip: Int) {\n  products(take: $take, skip: $skip) {\n    data {\n      id\n      name\n      price\n      description\n      rating\n      images {\n        alt\n        url\n      }\n      categories {\n        name\n        description\n      }\n    }\n  }\n}": types.ProductsGetListDocument,
    "query ProductsGetListLength {\n  products {\n    meta {\n      total\n    }\n  }\n}": types.ProductsGetListLengthDocument,
};

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
export function graphql(source: "query ProductsGetList($take: Int, $skip: Int) {\n  products(take: $take, skip: $skip) {\n    data {\n      id\n      name\n      price\n      description\n      rating\n      images {\n        alt\n        url\n      }\n      categories {\n        name\n        description\n      }\n    }\n  }\n}"): typeof import('./graphql').ProductsGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetListLength {\n  products {\n    meta {\n      total\n    }\n  }\n}"): typeof import('./graphql').ProductsGetListLengthDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
