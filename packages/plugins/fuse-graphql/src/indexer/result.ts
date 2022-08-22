export enum SearchResultType {
  QUERY = 'query',
  MUTATION = 'mutation',
  SUBSCRIPTION = 'subscription',
  TYPE = 'type',
}

export enum GraphQLType {
  ENUM = 'enum',
  SCALAR = 'scalar',
  INTERFACE = 'interface',
  UNION = 'union',
  OBJECT = 'object',
  INPUT_OBJECT = 'input_object',
}

type SearchResultBase<T> = {
  /**
   * Arbitrary data of your choice that will be included in every search result for this markdown document.
   */
  data: T

  /**
   * Either the name of the query, mutation, subscription or the type.
   */
  name: string

  /**
   * The description of the entity,
   */
  description?: string
}

export type TypeSearchResult<T> = SearchResultBase<T> & {
  type: SearchResultType.TYPE
}

export type EnumSearchResult<T> = TypeSearchResult<T> & {
  /**
   * The GraphQL type of this result.
   */
  graphqlType: GraphQLType.ENUM

  /**
   * All the possible enum values.
   */
  values: ReadonlyArray<EnumValue>
}

export type EnumValue = {
  /**
   * The value of the enum.
   */
  value: string

  /**
   * The description associated to this enum value.
   */
  description?: string
}

export type ScalarSearchResult<T> = TypeSearchResult<T> & {
  /**
   * The GraphQL type of this result.
   */
  graphqlType: GraphQLType.SCALAR
}

export type InterfaceSearchResult<T> = TypeSearchResult<T> & {
  graphqlType: GraphQLType.INTERFACE

  /**
   * The fields of this type.
   */
  fields: ReadonlyArray<FieldSearchResult>
}

export type UnionSearchResult<T> = TypeSearchResult<T> & {
  graphqlType: GraphQLType.UNION
}

export type ObjectSearchResult<T> = TypeSearchResult<T> &
  InterfaceSearchResult<T> & {
    graphqlType: GraphQLType.OBJECT
  }

export type InputObjectType<T> = TypeSearchResult<T> & {
  graphqlType: GraphQLType.INPUT_OBJECT

  /**
   * The fields for this input object.
   */
  fields: ReadonlyArray<InputObjectFieldSearchResult>
}

export type QuerySearchResult<T> = SearchResultBase<T> & {
  type:
    | SearchResultType.QUERY
    | SearchResultType.MUTATION
    | SearchResultType.SUBSCRIPTION

  /**
   * The arguments that can be passed to this query.
   */
  arguments: ReadonlyArray<ArgumentSearchResult>
}

export type ArgumentSearchResult = {
  /**
   * The name of the argument.
   */
  name: string
  /**
   * The description of the argument.
   */
  description?: string
}

export type FieldSearchResult = {
  /**
   * The name of the field.
   */
  name: string
  /**
   * The description of the field.
   */
  description?: string
  /**
   * The arguments of the field.
   */
  arguments: ReadonlyArray<ArgumentSearchResult>
}

export type InputObjectFieldSearchResult = {
  /**
   * The name of the input object's field.
   */
  name: string
  /**
   * The description of the input object's field.
   */
  description?: string
}
