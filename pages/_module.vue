<template>
  <v-row>
    <v-col>
      <ModulePage />
    </v-col>
  </v-row>
</template>

<script>
export default {
  layout: 'module',
  asyncData({ params, store }) {
    store.commit('setModule', params.module)
  },
}
</script>
