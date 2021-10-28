<template>
  <v-row>
    <v-col>
      <ModulePage :module="module" />
    </v-col>
  </v-row>
</template>

<script>
export default {
  layout: 'module',
  asyncData({ params }) {
    const module = params.module
    return {
      module,
    }
  },
}
</script>

<style lang="scss">
@import '../assets/sass/custom-variables.scss';
#classes-content {
  background-color: $--php-color-1;
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
