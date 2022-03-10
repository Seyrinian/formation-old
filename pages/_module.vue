<template>
      <ModulePage />
</template>

<script>
export default {
  layout: 'module',
  asyncData({ params, store }) {
    store.commit('setModule', params.module)
  },
}
</script>