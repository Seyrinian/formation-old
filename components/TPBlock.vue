<template>
  <v-container id="tp-list" fluid>
    <v-row justify="center">
      <v-col cols="10">
        <v-row>
          <v-col> <h1>Travaux pratiques</h1></v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-btn class="ma-2" href="/download/TP0.pdf" download large>
              <v-icon left> mdi-cloud-download </v-icon>
              Introduction: Exercices de découverte
            </v-btn>
            <v-btn class="ma-2" href="/download/TP1.pdf" download large>
              <v-icon left> mdi-cloud-download </v-icon>
              TP1: Manipulation de tableaux et de formulaires
            </v-btn>
            <v-btn class="ma-2" href="/download/TP2.pdf" download large>
              <v-icon left> mdi-cloud-download </v-icon>
              TP2: Fonctions en PHP
            </v-btn>
            <v-btn class="ma-2" href="/download/TP3.pdf" download large
              ><v-icon left> mdi-cloud-download </v-icon>
              TP3: Interaction avec la BDD
            </v-btn>
          </v-col>
        </v-row>
        <v-divider></v-divider>
        <v-row justify="center"
          ><v-col cols="4"
            ><v-btn
              class="ma-2"
              href="https://classroom.github.com/a/0IjSWJk4"
              x-large
              ><v-icon left> mdi-github </v-icon> Dépôt de remise des TP
            </v-btn></v-col
          ></v-row
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss">
@import '../assets/sass/custom-variables.scss';
#tp-list {
  height: 100vh;
  background-color: $--php-color-3;
}
</style>
