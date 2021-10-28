<template>
  <v-list id="side-menu" :class="module" nav dense two-line shaped>
    <v-list-item to="#accueil">
      <v-icon>mdi-home</v-icon>
      <v-list-item-content
        ><v-list-item-title>Accueil</v-list-item-title></v-list-item-content
      >
    </v-list-item>
    <v-divider></v-divider>
    <v-list-item to="#useful-links">
      <v-icon>mdi-link-variant</v-icon>
      <v-list-item-content
        ><v-list-item-title
          >Liens utiles</v-list-item-title
        ></v-list-item-content
      >
    </v-list-item>
    <v-list-item to="#tp-list">
      <v-icon>mdi-tools</v-icon>
      <v-list-item-content
        ><v-list-item-title
          >Travaux pratique</v-list-item-title
        ></v-list-item-content
      >
    </v-list-item>
    <v-divider></v-divider>
    <v-list-item v-for="page in pages" :key="page.slug" :to="'#' + page.link">
      <v-icon>{{ page.icon }}</v-icon>
      <v-list-item-content
        ><v-list-item-title>{{ page.title }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
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

#side-menu.php {
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
