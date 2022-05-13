var e=`---
title: Template - Carbon Multi-Page
since: 1.0.0
tags: ['svelte', 'svelte-kit']
---

This starter uses IBM's [Carbon Design](https://carbondesignsystem.com/) in a multi-page documentation, meaning that each type, query and mutation gets its own dedicated page.

See the template's [readme](https://github.com/magidoc-org/magidoc/blob/main/packages/starters/carbon-multi-page/README.md) if you use the [init](/cli/init) command.

## Demo

See the latest example of this template on [Netlify](https://magidoc-carbon-multi-page.netlify.app).

## Supported options

The following options are supported and can be provided via the [magidoc.mjs](/cli/magidoc-configuration) config file.

\`\`\`javascript
// magidoc.mjs

export default {
  website: {
    template: 'carbon-multi-page',
    options: {
      appTitle: 'Magidoc',
      appLogo: 'https://some-website/my-image.png',
      siteRoot: '/docs',
      pages: [
        {
          title: 'Content',
          // This template supports only a single level of nesting.
          // All sub-levels will be discarded.
          content: [
            {
              title: 'SubContent',
              content: 'Your markdown here.',
            },
          ],
        },
      ],
      queryGenerationFactories: {},
    },
  },
}
\`\`\`
`;export{e as default};