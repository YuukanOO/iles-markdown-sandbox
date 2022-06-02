<script lang="ts" setup>
const props = defineProps<{
  href: string;
}>();

const isExternal = props.href.startsWith("http");
</script>

<template>
  <a :href="href" :rel="isExternal ? 'noopener noreferrer' : undefined"
    ><slot
  /></a>
</template>

<style scoped>
a {
  color: blue;
}
</style>
