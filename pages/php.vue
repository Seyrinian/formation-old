<template>
  <div>
    <Profil />
    <TPBlock />
    <!-- <ClassesBlock /> -->
    <nuxt-content v-for="page in pages" :key="page.slug" :document="page" />
  </div>
</template>

<script>
export default {
  layout: 'cours',
  async asyncData({ $content }) {
    const pages = await $content('php').sortBy('slug', 'asc').fetch()
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
