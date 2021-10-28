<template>
  <v-row>
    <v-col>
      <Profil :module="module" />
      <TPBlock />
      <ModuleContent />
      <BackToTop />
    </v-col>
  </v-row>
</template>


<script>
import { mapActions } from 'vuex'

export default {
  props: {
    module: { type: String, default: '' },
  },
  async fetch() {
    const pages = await this.$content(this.module).sortBy('slug', 'asc').fetch()
    this.setPages(pages)
  },
  methods: {
    ...mapActions(['setPages']),
  },
}
</script>

<style lang="scss">
@import '../assets/sass/custom-variables.scss';
#classes-content {
  background-color: $--php-color-1;
}
.nuxt-content h2 {
  text-align: center;
}

.nuxt-content h2 {
  font-size: 36px;
}

.nuxt-content h3 {
  font-size: 24px;
}
</style>
