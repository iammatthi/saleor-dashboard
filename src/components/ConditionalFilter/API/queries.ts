import { gql } from "@apollo/client";

export const initialDynamicLeftOperands = gql`
  query _GetDynamicLeftOperands($first: Int!, $query: String!) {
    attributes(first: $first, filter: { type: PRODUCT_TYPE, search: $query }) {
      edges {
        node {
          id
          name
          slug
          inputType
        }
      }
    }
  }
`;

export const initialDynamicOperands = gql`
  query _GetChannelOperands {
    channels {
      id
      name
      slug
    }
  }

  query _SearchCollectionsOperands($first: Int!, $collectionsSlugs: [String!]) {
    collections(first: $first, filter: { slugs: $collectionsSlugs }) {
      edges {
        node {
          id
          name
          slug
        }
      }
    }
  }

  query _SearchCategoriesOperands(
    $after: String
    $first: Int!
    $categoriesSlugs: [String!]
  ) {
    categories(
      after: $after
      first: $first
      filter: { slugs: $categoriesSlugs }
    ) {
      edges {
        node {
          id
          name
          slug
        }
      }
    }
  }

  query _SearchProductTypesOperands(
    $after: String
    $first: Int!
    $productTypesSlugs: [String!]
  ) {
    productTypes(
      after: $after
      first: $first
      filter: { slugs: $productTypesSlugs }
    ) {
      edges {
        node {
          id
          name
          slug
        }
      }
    }
  }

  query _SearchAttributeOperands(
    $attributesSlugs: [String!]
    $choicesIds: [ID!]
    $first: Int!
  ) {
    attributes(first: $first, filter: { slugs: $attributesSlugs }) {
      edges {
        node {
          id
          name
          slug
          inputType
          choices(first: 5, filter: { ids: $choicesIds }) {
            edges {
              node {
                slug: id
                id
                name
              }
            }
          }
        }
      }
    }
  }
`;

export const dynamicOperandsQueries = gql`
  query _GetAttributeChoices($slug: String!, $first: Int!, $query: String!) {
    attribute(slug: $slug) {
      choices(first: $first, filter: { search: $query }) {
        edges {
          node {
            slug: id
            id
            name
          }
        }
      }
    }
  }

  query _GetCollectionsChoices($first: Int!, $query: String!) {
    collections(first: $first, filter: { search: $query }) {
      edges {
        node {
          id
          name
          slug
        }
      }
    }
  }

  query _GetCategoriesChoices($first: Int!, $query: String!) {
    categories(first: $first, filter: { search: $query }) {
      edges {
        node {
          id
          name
          slug
        }
      }
    }
  }

  query _GetProductTypesChoices($first: Int!, $query: String!) {
    productTypes(first: $first, filter: { search: $query }) {
      edges {
        node {
          id
          name
          slug
        }
      }
    }
  }
`;
