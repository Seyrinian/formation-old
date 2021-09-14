<template>
  <div>
    <nuxt-content v-for="page in pages" :key="page" :document="page" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const pages = await $content('php').fetch()
    console.log(pages)
    return {
      pages,
    }
  },
}
</script>

<style>
h1 {
  text-align: center;
  font-size: 30px;
  color: #3a8ee6;
}
</style>
