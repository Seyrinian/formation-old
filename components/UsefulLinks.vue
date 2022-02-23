<template>
  <v-container id="useful-links" fluid :class="module">
    <h1 align="center">Liens utiles</h1>
    <v-row justify="center">
      <v-col v-for="(item, i) in items[module]" :key="i" cols="10" sm="5">
        <v-card
          justify="center"
          :height="height"
          :color="color"
          :href="item.link"
        >
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
import variables from '../assets/sass/custom-variables.scss'

export default {
  data: () => ({
    items: {
      php: [
        {
          title: 'Documentation PHP',
          description: 'Documentation officielle du language PHP.',
          icon: 'mdi-language-php',
          link: 'https://www.php.net/manual/fr/index.php',
        },
        {
          title: 'Dépôt Github',
          description:
            'Vous pousserez sur ce dépôt vos différents TP. Un dépôt par élève a été prévu à cet effet.',
          icon: 'mdi-github',
          link: 'https://classroom.github.com/',
        },
        {
          title: 'Documentation Git',
          description: 'Listing des commandes principales de Git',
          icon: 'mdi-git',
          link: 'https://gist.github.com/aquelito/8596717',
        },
        {
          title: 'VSCode',
          description:
            "Si vous n'avez pas d'éditeur de code, VSCode est une très bonne solution qui fournit de nombreuses extensions facilitant le travail avec PHP.",
          icon: 'mdi-microsoft-visual-studio-code',
          link: 'https://code.visualstudio.com/Download',
        },
        {
          title: 'WAMP',
          description:
            'Distribution Apache MySQL et PHP pour Windows. Si vous possédez un MAC utilisez MAMP et sur Linux XAMPP',
          icon: 'mdi-server',
          link: 'https://www.wampserver.com/',
        },
      ],
      vue: [
        {
          title: 'Documentation Vue',
          description: 'Documentation officielle du framework VueJS.',
          icon: 'mdi-vuejs',
          link: 'https://vuejs.org/v2/guide/',
        },
        {
          title: 'Vue DevTools',
          description:
            "Outils de développement pour Vue via l'inspecteur de Chrome.",
          icon: 'mdi-hammer-screwdriver',
          link: 'https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd',
        },
        {
          title: 'Node JS',
          description:
            "Installer de l'application NodeJS. Utile pour installer VUE en mode CLI. Le gestionnaire de package NPM est compris avec.",
          icon: 'mdi-nodejs',
          link: 'https://nodejs.org/fr/',
        },
        {
          title: 'VSCode',
          description:
            "Si vous n'avez pas d'éditeur de code, VSCode est une très bonne solution qui fournit de nombreuses extensions facilitant le travail avec PHP.",
          icon: 'mdi-microsoft-visual-studio-code',
          link: 'https://code.visualstudio.com/Download',
        },
        {
          title: 'Postman',
          description:
            "Outil permettant d'exécuter des requêtes HTTP et d'analyser leur réponse en détail. Très pratique lorsqu'il s'agit de tester des API",
          icon: 'mdi-api',
          link: 'https://www.postman.com/downloads/',
        },
      ],
      git: [
        {
          title: 'Documentation GIT',
          description: 'Documentation officielle de GIT.',
          icon: 'mdi-git',
          link: 'https://git-scm.com/doc',
        },
        {
          title: 'Télécharger GIT',
          description:
            "Permet d'installer l'environnement Git sur votre machine afin d'accéder aux commandes.",
          icon: 'mdi-download',
          link: 'https://git-scm.com/downloads',
        },
        {
          title: 'GitHub',
          description:
            "Plateforme permettant de créer et stocker des dépôts distant via Git. Il s'agit d'un des plus connus.",
          icon: 'mdi-github',
          link: 'https://github.com/',
        },
      ],
    },
  }),
  computed: {
    ...mapGetters({ module: 'getModule' }),
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

#useful-links.php {
  background-color: $--php-color-3;
}

#useful-links.vue {
  background-color: $--vue-color-1;
}

#useful-links.git {
  background-color: $--git-color-3;
}
</style>
