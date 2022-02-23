<template>
  <v-img :src="imgSrc()" :alt="alt"></v-img>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
  },
  methods: {
    imgSrc() {
      try {
        return require(`~/static/images/${this.src}`)
      } catch (error) {
        return null
      }
    },
  },
}
</script>