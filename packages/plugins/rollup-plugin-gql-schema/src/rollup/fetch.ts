import type { Plugin } from 'rollup'
import queryGraphQLSchema, { Method } from '../schema/query.js'
import { writeFileSync } from 'fs'
import { convert, OutputFormat } from '../schema/convert.js'

export type { Method }

export type PluginOptions = {
  /**
   * The URL the of the GraphQL API from which to fetch the GraphQL Schema using the introspection query.
   */
  url: string

  /**
   * The Introspection Query the use. Some GraphQL APIs do not respect the standard schema fir GraphQL introspection query used by GraphQL.js
   *
   * This overrides the query generated by GraphQL with a custom one.
   */
  query?: string

  /**
   * Wether the output format should be a GraphQL SDL file or an introspection JSON file.
   *
   * Defaults to introspection JSON.
   */
  format?: OutputFormat

  /**
   * The HTTP method used to call the GraphQL API.
   *
   * @default 'POST'
   */
  method?: Method

  /**
   * A record of headers to pass inside the GraphQL Request performed to the server. Mostly useful when Authorization is required.
   *
   * @default {"Content-Type": "application/json"}
   */
  headers?: Record<string, string>

  /**
   * Indicates the target path for the JSON Schema resulting from the Query.
   *
   * @default src/_schema.json
   */
  target?: string
}

export async function fetchSchema(options: PluginOptions) {
  const schema = await queryGraphQLSchema(options.url, {
    query: options.query,
    method: options.method,
    headers: options.headers,
  })

  const format: OutputFormat = options.format ?? 'introspection'
  const extension = format === 'sdl' ? 'graphqls' : 'json'
  const output = options.target || `src/_schema.${extension}`

  writeFileSync(output, convert(schema, format), {
    encoding: 'utf-8',
    flag: 'w',
  })
}

export default function fetchGraphQLSchema(options: PluginOptions): Plugin {
  return {
    name: 'fetch-graphql-schema',

    buildStart: async function () {
      await fetchSchema(options)
    },
  }
}
