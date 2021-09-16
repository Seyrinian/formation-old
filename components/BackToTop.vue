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
import variables from '../assets/sass/custom-variables.scss'

export default {
  data: () => ({
    fab: false,
    color: variables.phpTertiaryColor,
  }),

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

<style lang="scss">
@import '../assets/sass/custom-variables.scss';
.v-btn {
  background-color: $--php-color-3;
}
</style>
