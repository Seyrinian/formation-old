<template>
  <v-container id="header" :class="module" fluid>
    <v-row>
      <v-col cols="10" dense>
        <h1 class="text-h4 text-sm-h1">{{ heading }}</h1>
        <h2 class="my-10 text-h6 text-sm-h2">FOURNY Valentin</h2>
        <p v-if="module === 'git'">
          <strong>Cours réalisé en collaboration avec Gabin CARON.</strong>
        </p>
        <v-btn
          :color="color"
          href="mailto:fourny.valentin@gmail.com"
          type="primary"
          >Contacter l'enseignant</v-btn
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
import variables from '../assets/sass/custom-variables.scss'
export default {
  data: () => ({
    heading: '',
    color: '',
  }),
  computed: {
    ...mapGetters({ module: 'getModule' }),
  },
  mounted() {
    this.adaptModule()
  },
  methods: {
    adaptModule() {
      switch (this.module) {
        case 'php':
          this.heading = 'Programmation orientée côté serveur'
          this.color = variables.phpSecondaryColor
          break
        case 'vue':
          this.heading = 'Formation Vue et Single Page Application'
          this.color = variables.vuePrimaryColor
          break
        case 'git':
          this.heading = 'Tutoriel Git'
          this.color = variables.gitPrimaryColor
          break
        case 'node':
          this.heading = 'NodeJS et Rest API'
          this.color = variables.nodePrimaryColor
          break
        default:
          this.heading = ''
          break
      }
    },
  },
}
</script>

<style lang="scss">
@import '../assets/sass/custom-variables.scss';

#header.php {
  background-color: $--php-color-1;
}

#header.vue {
  background-color: $--vue-color-2;
}

#header.node {
  background-color: $--node-color-2;
}

#header.git {
  background-color: $--git-color-2;
}

#header {
  height: 100vh;
  padding-top: 30vh;
  padding-left: 10vh;
}
</style>
