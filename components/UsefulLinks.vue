<template>
  <v-container id="useful-links" fluid>
    <v-row justify="center">
      <v-col v-for="(item, i) in items[module]" :key="i" cols="5">
        <v-card :color="color" :href="item.link">
          <v-container>
            <v-row>
              <v-col cols="1">
                <v-avatar>
                  <v-icon x-large>{{ item.icon }}</v-icon>
                </v-avatar></v-col
              ><v-col cols="11">
                <v-card-title
                  class="text-h5"
                  v-text="item.title"
                ></v-card-title>
                <v-card-subtitle
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
          link: 'https://classroom.github.com/a/0IjSWJk4',
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
      javascript: {},
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
        case 'javascript':
          color = variables.javascriptPrimaryColor
          break
        default:
          color = ''
          break
      }
      return color
    },
  },
}
</script>

<style lang="scss">
@import '../assets/sass/custom-variables.scss';

#useful-links {
  height: 100vh;
  background-color: $--php-color-3;
}
</style>
