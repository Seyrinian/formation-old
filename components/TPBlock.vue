<template>
  <v-container id="tp-list" :class="module" fluid>
    <v-row justify="center">
      <v-col cols="10">
        <v-row>
          <v-col> <h1>Travaux pratiques</h1></v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-btn
              class="ma-2"
              href="/vacation/download/TP0.pdf"
              download
              large
            >
              <v-icon left> mdi-cloud-download </v-icon>
              Introduction: Exercices de découverte
            </v-btn>
            <v-btn
              class="ma-2"
              href="/vacation/download/TP1.pdf"
              download
              large
            >
              <v-icon left> mdi-cloud-download </v-icon>
              TP1: Manipulation de tableaux et de formulaires
            </v-btn>
            <v-btn
              class="ma-2"
              href="/vacation/download/TP2.pdf"
              download
              large
            >
              <v-icon left> mdi-cloud-download </v-icon>
              TP2: Fonctions en PHP
            </v-btn>
            <v-btn class="ma-2" href="/vacation/download/TP3.pdf" download large
              ><v-icon left> mdi-cloud-download </v-icon>
              TP3: Interaction avec la BDD
            </v-btn>
            <v-btn class="ma-2" href="/vacation/download/TP4.pdf" download large
              ><v-icon left> mdi-cloud-download </v-icon>
              TP4: Projet Rating - Partie 1
            </v-btn>
            <v-btn class="ma-2" href="/vacation/download/TP5.pdf" download large
              ><v-icon left> mdi-cloud-download </v-icon>
              TP5: Projet Rating - Partie 2
            </v-btn>
            <v-btn class="ma-2" href="/vacation/download/TP6.pdf" download large
              ><v-icon left> mdi-cloud-download </v-icon>
              TP6: Projet Rating - Partie 3
            </v-btn>
          </v-col>
        </v-row>
        <v-divider></v-divider>
        <v-row>
          <v-col> <h1>Corrections</h1></v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-btn
              class="ma-2"
              href="/vacation/corrections/TP0.zip"
              download
              large
            >
              <v-icon left> mdi-folder-zip </v-icon>
              Introduction: Exercices de découverte
            </v-btn>
            <v-btn
              class="ma-2"
              href="/vacation/corrections/TP1.zip"
              download
              large
            >
              <v-icon left> mdi-folder-zip </v-icon>
              TP1: Manipulation de tableaux et de formulaires
            </v-btn>
            <v-btn
              class="ma-2"
              href="/vacation/corrections/TP2.zip"
              download
              large
            >
              <v-icon left> mdi-folder-zip </v-icon>
              TP2: Fonctions en PHP
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({ pages: 'getPages', module: 'getModule' }),
  },
}
</script>

<style lang="scss">
@import '../assets/sass/custom-variables.scss';
#tp-list.php {
  background-color: $--php-color-2;
}
</style>
