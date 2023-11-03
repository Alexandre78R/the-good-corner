import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Ad = {
  __typename?: 'Ad';
  category: Category;
  createdAt: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  location: Scalars['String']['output'];
  owner: Scalars['String']['output'];
  picture: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};

export type AdDeleted = {
  __typename?: 'AdDeleted';
  category: Category;
  createdAt: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  location: Scalars['String']['output'];
  owner: Scalars['String']['output'];
  picture: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};

export type Category = {
  __typename?: 'Category';
  ads: Array<Ad>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type CreateAdInput = {
  category: PartialCategoryInput;
  description: Scalars['String']['input'];
  location: Scalars['String']['input'];
  owner: Scalars['String']['input'];
  picture: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  title: Scalars['String']['input'];
};

export type CreateCategoryInput = {
  name: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createAd: Ad;
  createCategory: Category;
  deleteAd: AdDeleted;
  updateAd: Ad;
};


export type MutationCreateAdArgs = {
  data: CreateAdInput;
};


export type MutationCreateCategoryArgs = {
  data: CreateCategoryInput;
};


export type MutationDeleteAdArgs = {
  id: Scalars['String']['input'];
};


export type MutationUpdateAdArgs = {
  data: UpdateAdInput;
};

export type PartialCategoryInput = {
  id: Scalars['ID']['input'];
};

export type Query = {
  __typename?: 'Query';
  findAdById: Ad;
  findCategory: Category;
  listAds: Array<Ad>;
  listAdsByCategory: Array<Ad>;
  listCategories: Array<Category>;
};


export type QueryFindAdByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryFindCategoryArgs = {
  id: Scalars['String']['input'];
};


export type QueryListAdsByCategoryArgs = {
  id: Scalars['String']['input'];
};

export type UpdateAdInput = {
  category?: InputMaybe<PartialCategoryInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  location?: InputMaybe<Scalars['String']['input']>;
  owner?: InputMaybe<Scalars['String']['input']>;
  picture?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type CreateAdMutationVariables = Exact<{
  data: CreateAdInput;
}>;


export type CreateAdMutation = { __typename?: 'Mutation', createAd: { __typename?: 'Ad', category: { __typename?: 'Category', id: string } } };

export type UpdateAdMutationVariables = Exact<{
  data: UpdateAdInput;
}>;


export type UpdateAdMutation = { __typename?: 'Mutation', updateAd: { __typename?: 'Ad', id: string, title: string, description?: string | null, owner: string, price: number, location: string, picture: string, createdAt: string, updatedAt: string, category: { __typename?: 'Category', id: string } } };

export type ListAdsByCategoryQueryVariables = Exact<{
  listAdsByCategoryId: Scalars['String']['input'];
}>;


export type ListAdsByCategoryQuery = { __typename?: 'Query', listAdsByCategory: Array<{ __typename?: 'Ad', id: string, picture: string, price: number, title: string }> };

export type FindAdByIdQueryVariables = Exact<{
  findAdById: Scalars['String']['input'];
}>;


export type FindAdByIdQuery = { __typename?: 'Query', findAdById: { __typename?: 'Ad', title: string, description?: string | null, price: number } };

export type ListCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type ListCategoriesQuery = { __typename?: 'Query', listCategories: Array<{ __typename?: 'Category', name: string, id: string }> };


export const CreateAdDocument = gql`
    mutation CreateAd($data: CreateAdInput!) {
  createAd(data: $data) {
    category {
      id
    }
  }
}
    `;
export type CreateAdMutationFn = Apollo.MutationFunction<CreateAdMutation, CreateAdMutationVariables>;

/**
 * __useCreateAdMutation__
 *
 * To run a mutation, you first call `useCreateAdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAdMutation, { data, loading, error }] = useCreateAdMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateAdMutation(baseOptions?: Apollo.MutationHookOptions<CreateAdMutation, CreateAdMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateAdMutation, CreateAdMutationVariables>(CreateAdDocument, options);
      }
export type CreateAdMutationHookResult = ReturnType<typeof useCreateAdMutation>;
export type CreateAdMutationResult = Apollo.MutationResult<CreateAdMutation>;
export type CreateAdMutationOptions = Apollo.BaseMutationOptions<CreateAdMutation, CreateAdMutationVariables>;
export const UpdateAdDocument = gql`
    mutation UpdateAd($data: UpdateAdInput!) {
  updateAd(data: $data) {
    id
    title
    description
    owner
    price
    location
    picture
    createdAt
    updatedAt
    category {
      id
    }
  }
}
    `;
export type UpdateAdMutationFn = Apollo.MutationFunction<UpdateAdMutation, UpdateAdMutationVariables>;

/**
 * __useUpdateAdMutation__
 *
 * To run a mutation, you first call `useUpdateAdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAdMutation, { data, loading, error }] = useUpdateAdMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateAdMutation(baseOptions?: Apollo.MutationHookOptions<UpdateAdMutation, UpdateAdMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateAdMutation, UpdateAdMutationVariables>(UpdateAdDocument, options);
      }
export type UpdateAdMutationHookResult = ReturnType<typeof useUpdateAdMutation>;
export type UpdateAdMutationResult = Apollo.MutationResult<UpdateAdMutation>;
export type UpdateAdMutationOptions = Apollo.BaseMutationOptions<UpdateAdMutation, UpdateAdMutationVariables>;
export const ListAdsByCategoryDocument = gql`
    query ListAdsByCategory($listAdsByCategoryId: String!) {
  listAdsByCategory(id: $listAdsByCategoryId) {
    id
    picture
    price
    title
  }
}
    `;

/**
 * __useListAdsByCategoryQuery__
 *
 * To run a query within a React component, call `useListAdsByCategoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useListAdsByCategoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListAdsByCategoryQuery({
 *   variables: {
 *      listAdsByCategoryId: // value for 'listAdsByCategoryId'
 *   },
 * });
 */
export function useListAdsByCategoryQuery(baseOptions: Apollo.QueryHookOptions<ListAdsByCategoryQuery, ListAdsByCategoryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListAdsByCategoryQuery, ListAdsByCategoryQueryVariables>(ListAdsByCategoryDocument, options);
      }
export function useListAdsByCategoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListAdsByCategoryQuery, ListAdsByCategoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListAdsByCategoryQuery, ListAdsByCategoryQueryVariables>(ListAdsByCategoryDocument, options);
        }
export function useListAdsByCategorySuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<ListAdsByCategoryQuery, ListAdsByCategoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ListAdsByCategoryQuery, ListAdsByCategoryQueryVariables>(ListAdsByCategoryDocument, options);
        }
export type ListAdsByCategoryQueryHookResult = ReturnType<typeof useListAdsByCategoryQuery>;
export type ListAdsByCategoryLazyQueryHookResult = ReturnType<typeof useListAdsByCategoryLazyQuery>;
export type ListAdsByCategorySuspenseQueryHookResult = ReturnType<typeof useListAdsByCategorySuspenseQuery>;
export type ListAdsByCategoryQueryResult = Apollo.QueryResult<ListAdsByCategoryQuery, ListAdsByCategoryQueryVariables>;
export const FindAdByIdDocument = gql`
    query FindAdById($findAdById: String!) {
  findAdById(id: $findAdById) {
    title
    description
    price
  }
}
    `;

/**
 * __useFindAdByIdQuery__
 *
 * To run a query within a React component, call `useFindAdByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindAdByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindAdByIdQuery({
 *   variables: {
 *      findAdById: // value for 'findAdById'
 *   },
 * });
 */
export function useFindAdByIdQuery(baseOptions: Apollo.QueryHookOptions<FindAdByIdQuery, FindAdByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindAdByIdQuery, FindAdByIdQueryVariables>(FindAdByIdDocument, options);
      }
export function useFindAdByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindAdByIdQuery, FindAdByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindAdByIdQuery, FindAdByIdQueryVariables>(FindAdByIdDocument, options);
        }
export function useFindAdByIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<FindAdByIdQuery, FindAdByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindAdByIdQuery, FindAdByIdQueryVariables>(FindAdByIdDocument, options);
        }
export type FindAdByIdQueryHookResult = ReturnType<typeof useFindAdByIdQuery>;
export type FindAdByIdLazyQueryHookResult = ReturnType<typeof useFindAdByIdLazyQuery>;
export type FindAdByIdSuspenseQueryHookResult = ReturnType<typeof useFindAdByIdSuspenseQuery>;
export type FindAdByIdQueryResult = Apollo.QueryResult<FindAdByIdQuery, FindAdByIdQueryVariables>;
export const ListCategoriesDocument = gql`
    query ListCategories {
  listCategories {
    name
    id
  }
}
    `;

/**
 * __useListCategoriesQuery__
 *
 * To run a query within a React component, call `useListCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useListCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useListCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<ListCategoriesQuery, ListCategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListCategoriesQuery, ListCategoriesQueryVariables>(ListCategoriesDocument, options);
      }
export function useListCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListCategoriesQuery, ListCategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListCategoriesQuery, ListCategoriesQueryVariables>(ListCategoriesDocument, options);
        }
export function useListCategoriesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<ListCategoriesQuery, ListCategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ListCategoriesQuery, ListCategoriesQueryVariables>(ListCategoriesDocument, options);
        }
export type ListCategoriesQueryHookResult = ReturnType<typeof useListCategoriesQuery>;
export type ListCategoriesLazyQueryHookResult = ReturnType<typeof useListCategoriesLazyQuery>;
export type ListCategoriesSuspenseQueryHookResult = ReturnType<typeof useListCategoriesSuspenseQuery>;
export type ListCategoriesQueryResult = Apollo.QueryResult<ListCategoriesQuery, ListCategoriesQueryVariables>;