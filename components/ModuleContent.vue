<template>
  <div>
    <v-container id="module-content" :class="module" fluid>
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
    ...mapGetters({ pages: 'getPages', module: 'getModule' }),
  },
}
</script>

<style lang="scss">
@import '../assets/sass/custom-variables.scss';

#module-content.php {
  background-color: $--php-color-1;
}

#module-content.vue {
  background-color: $--vue-color-2;
}
#module-content.vue a {
  color: $--vue-color-1;
}

#module-content.node {
  background-color: $--node-color-2;
}

#module-content.git {
  background-color: $--git-color-2;
}

.nuxt-content h2 {
  text-align: center;
}

.nuxt-content h2 {
  font-size: 36px;
}

.nuxt-content h3 {
  font-size: 24px;
}
</style>