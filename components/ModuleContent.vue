<template>
  <div>
    <v-container id="classes-content" fluid>
      <v-row justify="center">
        <v-col cols="10">
          <nuxt-content
            v-for="page in pages"
            :key="page.slug"
            :document="page"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({ pages: 'getPages' }),
  },
}
</script>
