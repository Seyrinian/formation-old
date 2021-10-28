<template>
  <v-row>
    <v-col>
      <Profil />
      <UsefulLinks />
      <TPBlock />
      <ModuleContent />
      <BackToTop />
    </v-col>
  </v-row>
</template>


<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  async fetch() {
    const pages = await this.$content(this.module).sortBy('slug', 'asc').fetch()
    this.setPages(pages)
  },
  computed: {
    ...mapGetters({ module: 'getModule' }),
  },

  methods: {
    ...mapActions(['setPages']),
  },
}
</script>
