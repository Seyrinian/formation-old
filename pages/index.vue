<template>
  <v-container fluid>
    <v-row
      ><v-col><h1>Choisissez votre module</h1></v-col></v-row
    >
    <v-row align="center">
      <v-col v-for="(item, i) in items" :key="i" cols="12" sm="6">
        <v-card
          :height="height"
          :color="item.color"
          :to="item.to"
          :disabled="item.inactive"
        >
          <v-container fluid
            ><v-row align="center"
              ><v-col cols="2 " align="center"
                ><v-avatar>
                  <v-icon x-large>{{ item.icon }}</v-icon>
                </v-avatar></v-col
              ><v-col cols="10">
                <v-card-title
                  class="text-h5"
                  v-text="item.title"
                ></v-card-title>
                <v-card-subtitle
                  class="d-none d-sm-flex"
                  v-text="item.description"
                ></v-card-subtitle></v-col></v-row
          ></v-container>
        </v-card> </v-col></v-row
  ></v-container>
</template>

<script>
import variables from '../assets/sass/custom-variables.scss'

export default {
  data: () => ({
    items: [
      {
        color: variables.nodeSecondaryColor,
        icon: 'mdi-nodejs',
        title: 'Node JS',
        to: '/node',
        description:
          "Section dédiée à l'apprentissage et la pratique de NodeJS avec la gestion d'un backend, d'une API Rest et d'Express JS.",
        inactive: false,
      },
      {
        color: variables.vuePrimaryColor,
        icon: 'mdi-vuejs',
        title: 'Vue JS',
        to: '/vue',
        description:
          "Section dédiée à l'apprentissage et la pratique du développement frontend avec le framework Vue JS. Contient aussi des informations sur le SPA et le système de Store centralisé via Vuex.",
        inactive: false,
      },
      {
        color: variables.phpPrimaryColor,
        icon: 'mdi-language-php',
        title: 'PHP',
        to: '/php',
        description: "Section dédiée à l'apprentissage et la pratique du PHP.",
        inactive: false,
      },
      {
        color: variables.gitPrimaryColor,
        icon: 'mdi-git',
        title: 'Git',
        to: '/git',
        description:
          "Section dédiée à l'apprentissage et la pratique de GIT. Contient les liens d'installations et les commandes importantes.",
        inactive: false,
      },
      {
        color: variables.testSecondaryColor,
        icon: 'mdi-git',
        title: 'Test',
        to: '/test',
        description:
          "Apprentissage du testing et suivi de notre projet avec l'intégration continue.",
        inactive: false,
      },
    ],
  }),
  computed: {
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
