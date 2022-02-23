<template>
  <v-btn id="toggleMenu" fab fixed top left :color="color" @click="openMenu">
    <v-icon>mdi-menu</v-icon>
  </v-btn>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import variables from '../assets/sass/custom-variables.scss'

export default {
  data: () => ({
    fab: false,
  }),
  computed: {
    ...mapGetters({ module: 'getModule', isNavOpen: 'getIsNavOpen' }),
    color() {
      let color = ''
      switch (this.module) {
        case 'php':
          color = variables.phpTertiaryColor
          break
        case 'vue':
          color = variables.vuePrimaryColor
          break
        case 'git':
          color = variables.gitPrimaryColor
          break
        case 'node':
          color = variables.nodeTertiaryColor
          break
        default:
          color = ''
          break
      }
      return color
    },
  },
  methods: {
    ...mapActions(['setIsNavOpen']),
    openMenu() {
      this.setIsNavOpen(true)
    },
  },
}
</script>
