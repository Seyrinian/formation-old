<template>
  <v-app dark>
    <v-navigation-drawer
      :value="isNavOpen"
      app
      :expand-on-hover="!isNavOpen"
      :permanent="isNavOpen"
      ><ModuleNavigation
    /></v-navigation-drawer>
    <v-main><Nuxt /></v-main>
  </v-app>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({ isNavOpen: 'getIsNavOpen' }),
  },
  mounted() {
    this.setIsNavOpen(!this.$vuetify.breakpoint.xs)
  },
  methods: {
    ...mapActions(['setIsNavOpen']),
  },
}
</script>