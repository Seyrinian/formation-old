<template>
  <v-container v-if="hasTP" id="tp-list" :class="module" fluid>
    <h1 align="center">Travaux pratiques</h1>
    <v-row justify="center">
      <v-col v-for="(item, i) in items[module]" :key="i" cols="10" sm="5">
        <v-card :height="height" :color="color" :href="item.link">
          <v-container>
            <v-row align="center">
              <v-col cols="2" align="center">
                <v-avatar>
                  <v-icon x-large>{{ item.icon }}</v-icon>
                </v-avatar></v-col
              ><v-col cols="10">
                <v-card-title
                  class="text-h6 text-sm-h5"
                  v-text="item.title"
                ></v-card-title>
                <v-card-subtitle
                  class="d-none d-sm-flex"
                  v-text="item.description"
                ></v-card-subtitle></v-col></v-row
          ></v-container>
        </v-card> </v-col
    ></v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
import _ from 'lodash'
import variables from '../assets/sass/custom-variables.scss'

export default {
  data: () => ({
    items: {
      vue: [
        {
          title: 'Tuto - Partie 1 - Introduction à Vue',
          description:
            "Tutoriel complet permettant de voir la majorité des points de cours jusqu'au directives et découvrir le framework Vue",
          icon: 'mdi-school',
          link: 'https://classroom.github.com/a/W62XZvzt',
        },
        {
          title: 'Tuto - Partie 2 - Introduction à Vue CLI',
          description:
            'Tutoriel permettant de faire ses premières armes avec Vue CLI et de connecter une API',
          icon: 'mdi-school',
          link: 'https://classroom.github.com/a/7etjLAJi',
        },
        {
          title: 'Projet Pokedex',
          description:
            "Création d'un Pokédex à l'aide de Vue avec plusieurs fonctionnalités (filtrage, liste, détails).",
          icon: 'mdi-pokeball',
          link: 'https://classroom.github.com/a/I9cwisSZ',
        },
      ],
      node: [
        {
          title: 'Introduction à NodeJS et Express',
          description:
            "Tutoriel permettant de faire ses premières armes avec NodeJS, les packages et une initiations au routing d'express",
          icon: 'mdi-school',
          link: 'https://classroom.github.com/a/Se0aLbm9',
        },  
      ],
    },
  }),
  computed: {
    ...mapGetters({ module: 'getModule' }),
    hasTP() {
      if (_.has(this.items, this.module)) return true
      else return false
    },
    color() {
      let color = ''
      switch (this.module) {
        case 'php':
          color = variables.phpPrimaryColor
          break
        case 'node':
          color = variables.nodePrimaryColor
          break
        case 'git':
          color = variables.gitPrimaryColor
          break
        case 'vue':
          color = variables.vueSecondaryColor
          break
        default:
          color = ''
          break
      }
      return color
    },
    height() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 'auto'
        case 'sm':
          return 200
        case 'md':
          return 150
        case 'lg':
          return 150
        case 'xl':
          return 150
        default:
          return '500'
      }
    },
  },
}
</script>

<style lang="scss">
@import '../assets/sass/custom-variables.scss';

#tp-list.php {
  background-color: $--php-color-2;
}

#tp-list.vue {
  background-color: $--vue-color-1;
}
</style>
