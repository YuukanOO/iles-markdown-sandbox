import { defineApp } from "iles";
import Anchor from "~/components/anchor.vue";

export default defineApp({
  mdxComponents: {
    a: Anchor,
  },
});
