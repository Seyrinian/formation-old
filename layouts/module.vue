<template>
  <v-app dark>
    <v-navigation-drawer
      app
      expand-on-hover
      :permanent="!$vuetify.breakpoint.xs"
      ><ModuleNavigation
    /></v-navigation-drawer>
    <v-main><Nuxt /></v-main>
  </v-app>
</template>
