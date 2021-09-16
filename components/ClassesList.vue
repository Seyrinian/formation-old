<template>
  <v-list id="side-menu" nav dense two-line shaped>
    <v-list-item to="#accueil">
      <v-icon>mdi-home</v-icon>
      <v-list-item-content
        ><v-list-item-title>Accueil</v-list-item-title></v-list-item-content
      >
    </v-list-item>
    <v-divider></v-divider>
    <v-list-item to="#tp-list">
      <v-icon>mdi-tools</v-icon>
      <v-list-item-content
        ><v-list-item-title
          >Travaux pratique</v-list-item-title
        ></v-list-item-content
      >
    </v-list-item>
    <v-divider></v-divider>
    <v-list-item to="#intro">
      <v-icon>mdi-door-open</v-icon>
      <v-list-item-content
        ><v-list-item-title
          >Introduction</v-list-item-title
        ></v-list-item-content
      >
    </v-list-item>
    <v-list-item to="#environnement">
      <v-icon>mdi-file-code</v-icon>
      <v-list-item-content
        ><v-list-item-title
          >Préparer son environnement</v-list-item-title
        ></v-list-item-content
      >
    </v-list-item>
    <v-list-item to="#bases">
      <v-icon>mdi-language-php</v-icon>
      <v-list-item-content
        ><v-list-item-title
          >Les bases de PHP</v-list-item-title
        ></v-list-item-content
      >
    </v-list-item>
    <v-list-item to="#tableaux">
      <v-icon>mdi-code-array</v-icon>
      <v-list-item-content
        ><v-list-item-title>Tableaux</v-list-item-title></v-list-item-content
      >
    </v-list-item>
    <v-list-item to="#fonctions">
      <v-icon>mdi-function</v-icon>
      <v-list-item-content
        ><v-list-item-title>Fonctions</v-list-item-title></v-list-item-content
      >
    </v-list-item>
    <v-list-item to="#formulaires">
      <v-icon>mdi-form-select</v-icon>
      <v-list-item-content
        ><v-list-item-title
          >Transmettre les données par un formulaire</v-list-item-title
        ></v-list-item-content
      >
    </v-list-item>
    <v-list-item to="#url">
      <v-icon>mdi-notebook</v-icon>
      <v-list-item-content
        ><v-list-item-title
          >Transmettre les données par l'URL</v-list-item-title
        ></v-list-item-content
      >
    </v-list-item>
    <v-list-item to="#bdd">
      <v-icon>mdi-database</v-icon>
      <v-list-item-content
        ><v-list-item-title
          >SGBD et manipulation de données</v-list-item-title
        ></v-list-item-content
      >
    </v-list-item>
    <v-list-item to="#pdo">
      <v-icon>mdi-database</v-icon>
      <v-list-item-content
        ><v-list-item-title
          >PDO et requêtes préparées</v-list-item-title
        ></v-list-item-content
      >
    </v-list-item>
    <v-list-item to="#mvc">
      <v-icon>mdi-ruler-square</v-icon>
      <v-list-item-content
        ><v-list-item-title>MVC</v-list-item-title></v-list-item-content
      >
    </v-list-item>
  </v-list>
</template>

<style lang="scss">
@import '../assets/sass/custom-variables.scss';

#side-menu {
  background-color: $--php-color-2;
}

.v-list {
  height: 100%;
  z-index: 1;
  top: 0;
  left: 0;
  overflow-x: hidden;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

/* Hide scrollbar for Chrome, Safari and Opera */
.v-list::-webkit-scrollbar {
  display: none;
}
</style>
