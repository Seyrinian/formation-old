<template>
  <v-btn
    v-show="fab"
    v-scroll="onScroll"
    fab
    fixed
    bottom
    right
    :color="color"
    @click="toTop"
  >
    <v-icon>mdi-arrow-up-drop-circle-outline</v-icon>
  </v-btn>
</template>

<script>
import { mapGetters } from 'vuex'
import variables from '../assets/sass/custom-variables.scss'

export default {
  data: () => ({
    fab: false,
  }),
  computed: {
    ...mapGetters({ module: 'getModule' }),
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
    onScroll(e) {
      if (typeof window === 'undefined') return
      const top = window.pageYOffset || e.target.scrollTop || 0
      this.fab = top > 20
    },
    toTop() {
      this.$vuetify.goTo(0)
    },
  },
}
</script>
