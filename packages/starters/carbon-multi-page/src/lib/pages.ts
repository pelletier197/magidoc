import { templates, type Page } from '@magidoc/plugin-starter-variables'
import type { GraphQLSchema } from 'graphql'
import _ from 'lodash'
import type { CustomContent, CustomPage } from 'src/app'
import { base } from '$app/paths'
import { schema } from './model'

export const appTitle = templates.APP_TITLE.vite.getOrDefault(
  import.meta.env,
  'Magidoc',
)

export const pages: ReadonlyArray<CustomContent> = Object.freeze(
  formatPages(
    base,
    templates.PAGES.vite.getOrDefault(
      import.meta.env,
      getDefaultPages(appTitle),
    ),
  ),
)

export const homePageUrl = getHomePageUrl(base, pages, schema)

export function formatPages(
  base: string,
  pages: (Page | undefined)[],
): ReadonlyArray<CustomContent> {
  return pages
    .filter((page): page is Page => !!page)
    .map((item) => asCustomContent(base, [], item))
}

export function joinUrlPaths(...paths: string[]): string {
  return (
    '/' +
    paths
      .flatMap((path) => path.split('/'))
      .filter((path) => !!path)
      .join('/')
  )
}

export function getHomePageUrl(
  base: string,
  pages: ReadonlyArray<CustomContent>,
  schema: GraphQLSchema,
): string {
  const firstPage = findFirstPage(pages)
  if (firstPage) return firstPage.href

  const firstQuery = _.first(
    Object.values(schema.getQueryType()?.getFields() || {}),
  )
  if (firstQuery) return joinUrlPaths(base, `/model/queries/${firstQuery.name}`)

  const firstMutation = _.first(
    Object.values(schema.getMutationType()?.getFields() || {}),
  )
  if (firstMutation)
    return joinUrlPaths(base, `/model/mutations/${firstMutation.name}`)

  const firstSubscription = _.first(
    Object.values(schema.getSubscriptionType()?.getFields() || {}),
  )
  if (firstSubscription)
    return joinUrlPaths(base, `/model/subscriptions/${firstSubscription.name}`)

  throw new Error(
    'No custom pages or query available to use as the root application URL. You need to provide at least one custom page or your schema should contain at least one query/mutation/subscription.',
  )
}

export function findFirstPage(
  pages: ReadonlyArray<CustomContent>,
): CustomPage | null {
  return firstPageBy(pages, () => true)
}

export function findPageByHref(
  pages: CustomContent[],
  href: string,
): CustomPage | null {
  return firstPageBy(pages, (page) => page.href === href)
}

function firstPageBy(
  pages: ReadonlyArray<CustomContent>,
  matcher: (page: CustomPage) => boolean,
): CustomPage | null {
  for (const page of pages) {
    if (page.type === 'page' && matcher(page)) {
      return page
    }

    if (page.type === 'menu') {
      const result = firstPageBy(page.children, matcher)
      if (result) return result
    }
  }

  return null
}

function asCustomContent(
  base: string,
  path: string[],
  page: Page,
): CustomContent {
  if (typeof page.content === 'string') {
    return {
      type: 'page',
      title: page.title,
      content: page.content,
      href: joinUrlPaths(base, ...path, generatePath(page.title)),
    }
  }

  const newPath = path.concat([generatePath(page.title)])
  return {
    type: 'menu',
    title: page.title,
    children: page.content.map((child) =>
      asCustomContent(base, newPath, child),
    ),
  }
}

function generatePath(value: string): string {
  // https://github.com/markedjs/marked/blob/master/src/Slugger.js
  return (
    value
      .toLowerCase()
      .trim()
      // remove html tags
      .replace(/<[!\/a-z].*?>/gi, '')
      // remove unwanted chars
      .replace(
        /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,
        '',
      )
      .replace(/\s/g, '-')
  )
}

export function getDefaultPages(title: string): Page[] {
  return [
    {
      title: 'Introduction',
      content: [
        {
          title: 'Welcome',
          content: `
        # Welcome

        Welcome to ${title}'s GraphQL API documentation. This documentation was automatically generated by [Magidoc](https://github.com/magidoc-org/magidoc),
        a free open source static documentation generator for GraphQL.
        `
            .split('\n')
            .map((line) => line.trim())
            .join('\n'),
        },
      ],
    },
  ]
}