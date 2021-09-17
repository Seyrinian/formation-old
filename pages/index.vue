<template>
  <v-row>
    <v-col>
      <Profil />
      <TPBlock />
      <!-- <ClassesBlock /> -->
      <v-container id="classes-content" fluid>
        <v-row justify="center">
          <v-col cols="10">
            <nuxt-content
              v-for="page in pages"
              :key="page.slug"
              :document="page"
            />
          </v-col>
        </v-row>
      </v-container>
      <BackToTop />
    </v-col>
  </v-row>
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

<style lang="scss">
@import '../assets/sass/custom-variables.scss';
#classes-content {
  background-color: $--php-color-1;
}
.nuxt-content h1 {
  text-align: center;
}

.nuxt-content h1 {
  font-size: 36px;
}

.nuxt-content h2 {
  font-size: 24px;
}
</style>
