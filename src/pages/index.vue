<page>
title: Markdown rendered by @mdx-js/mdx using the iles jsx-runtime
</page>

<template>
  <main>
    <h1>{{ $frontmatter.title }}</h1>
    <markdown
      :content="`Hi **there**!

This content is rendered using @mdx-js/mdx and use components overriden by the [app mdxComponents](https://iles.pages.dev/guide/markdown#override-components-globally) so it shares your config.`"
    />
  </main>
</template>

<style>
main {
  margin: 1rem auto;
  max-width: 50rem;
}
</style>
