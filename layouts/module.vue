<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawerState"
      app
      :expand-on-hover="!isNavOpen"
      :bottom="$vuetify.breakpoint.xs"
      :temporary="$vuetify.breakpoint.xs"
      :permanent="!$vuetify.breakpoint.xs"
      ><ModuleNavigation
    /></v-navigation-drawer>
    <v-main><Nuxt /></v-main>
  </v-app>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters({ isNavOpen: 'getIsNavOpen' }),
    drawerState: {
      get() {
        return this.$store.state.isNavOpen
      },
      set(state) {
        if (state !== this.$store.state.isNavOpen) {
          this.$store.dispatch('setIsNavOpen')
        }
      },
    },
  },
  methods: {
    ...mapActions(['setIsNavOpen']),
  },
}
</script>