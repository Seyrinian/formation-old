<template>
  <el-row type="flex" justify="center">
    <el-col :span="20">
      <Profil />
      <TPBlock />
      <!-- <ClassesBlock /> -->
      <nuxt-content v-for="page in pages" :key="page.slug" :document="page" />
    </el-col>
  </el-row>
</template>

<script>
export default {
  layout: 'cours',
  async asyncData({ $content }) {
    const pages = await $content('php').sortBy('slug', 'asc').fetch()
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
