<template>
  <v-container id="header" fluid>
    <v-row height="100%">
      <v-col cols="10" dense>
        <h1>Programmation orientée côté serveur</h1>
        <h2>FOURNY Valentin</h2>
        <v-btn href="mailto:fourny.valentin@gmail.com" type="primary"
          >Contacter l'enseignant</v-btn
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss">
@import '../assets/sass/custom-variables.scss';

#header {
  background-color: $--php-color-1;
  height: 100vh;
}

h1 {
  font-size: 48px;
}

h2 {
  font-size: 30px;
}
</style>
