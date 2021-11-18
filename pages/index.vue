<template>
  <v-container>
    <v-row
      ><v-col align="center" justify="center">
        <h1>Choisissez votre module</h1></v-col
      ></v-row
    >
    <v-row align="center" justify="center">
      <v-col v-for="(item, i) in items" :key="i" cols="6">
        <v-card :color="item.color" :to="item.to" :disabled="item.inactive">
          <v-container fluid
            ><v-row
              ><v-col cols="1"
                ><v-avatar>
                  <v-icon x-large>{{ item.icon }}</v-icon>
                </v-avatar></v-col
              ><v-col cols="10">
                <v-card-title
                  class="text-h5"
                  v-text="item.title"
                ></v-card-title>
                <v-card-subtitle
                  v-text="item.description"
                ></v-card-subtitle></v-col></v-row
          ></v-container>
        </v-card> </v-col></v-row
  ></v-container>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        color: '#787CB5',
        icon: 'mdi-language-php',
        title: 'PHP',
        to: '/php',
        description:
          "Section dédiée à l'apprentissage et la pratique du PHP. Contient notamment les TP et leur dépôt.",
        inactive: false,
      },
      {
        color: '#FFA500',
        icon: 'mdi-language-javascript',
        title: 'Javascript',
        to: '/javascript',
        description:
          "Section dédiée à l'apprentissage et la pratique du Javascript. Contient notamment les TP et leur dépôt.",
        inactive: true,
      },
    ],
  }),
}
</script>
