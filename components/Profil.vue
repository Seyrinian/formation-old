<template>
  <v-container id="header" fluid>
    <v-row>
      <v-col cols="10" dense>
        <h1>{{ adaptHeading }}</h1>
        <h2>FOURNY Valentin</h2>
        <v-btn href="mailto:fourny.valentin@gmail.com" type="primary"
          >Contacter l'enseignant</v-btn
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    module: { type: String, default: '' },
  },
  data() {
    return {
      heading: {
        type: String,
        default: '',
      },
    }
  },
  computed: {
    adaptHeading() {
      let heading = ''
      switch (this.module) {
        case 'php':
          heading = 'Programmation orientée côté serveur'
          break
        case 'javascript':
          heading = 'Programmation orientée côté client'
          break
        default:
          heading = ''
          break
      }
      return heading
    },
  },
}
</script>

<style lang="scss">
@import '../assets/sass/custom-variables.scss';

#header {
  background-color: $--php-color-1;
  height: 100vh;
  padding-top: 30vh;
  padding-left: 10vh;
}

h1 {
  font-size: 48px;
}

h2 {
  font-size: 30px;
}
</style>
