import { defineConfig } from "iles";

export default defineConfig({
  vite: {
    // @ts-expect-error
    ssr: {
      noExternal: ["@mdx-js/mdx"],
    },
  },
});
