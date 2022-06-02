<script lang="ts" setup>
import { evaluate } from "@mdx-js/mdx";
import { useMDXComponents } from "iles";
// @ts-expect-error
import * as runtime from "iles/jsx-runtime";

const props = defineProps<{
  content: string;
}>();

const { default: MDXContent } = await evaluate(props.content, {
  ...runtime,
  useMDXComponents,
});
</script>

<template>
  <MDXContent />
</template>
