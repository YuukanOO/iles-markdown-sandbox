# Markdown render in an iles app without third parties

This is a tiny sandbox repo to render markdown in an **iles** app without requiring third party packages since iles can already convert `mdx`.

The goal is tied to my personal use case as [described here](https://github.com/ElMassimo/iles/discussions/103) and should render arbitrary Markdown using the configuration [defined in iles](https://iles.pages.dev/guide/markdown#override-components-globally).

## How does it work?

I am by no mean an expert of the Vite bundling ecosystem but I made it kinda working by:

- Creating a [mardown component](./src/components/markdown.vue), using the `@mdx-js/mdx` `evaluate` function and using the `iles/jsx-runtime` to actually render stuff,
- Using the unexposed vite config `vite.ssr.noExternal` by adding `@mdx-js/mdx` to solve the ESM module issue I had in the [iles.config.ts](./iles.config.ts) file

With this in place, I can use my newly created component to render arbitrary markdown content.

```vue
<template>
  <markdown
    content="any **markdown** content will be rendered at build time using ile components overriding"
  />
</template>
```

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```
