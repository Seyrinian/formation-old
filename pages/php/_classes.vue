<template>
  <div>
    <nuxt-content :document="page"/>
  </div>
</template>

<script>
export default {
   layout: 'cours',
  async asyncData({ $content, params }) {
    const classes = params.classes
    const page = await $content(classes).fetch()

    return {
      page
    };
  }
};
</script>
