<template>
  <nuxt-content :document="page" />
</template>

<script>
export default {
  layout: 'cours',
  async asyncData({ $content, params }) {
    const classes = params.classes
    const page = await $content(classes).fetch()

    return {
      page,
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
