<template>
  <v-container id="tp-list" :class="module" fluid>
    <v-row justify="center">
      <v-col cols="10">
        <v-row>
          <v-col> <h1>Travaux pratiques</h1></v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-btn
              v-for="download in downloads"
              :key="download.title"
              class="ma-2"
              :href="'/formation/download/' + download.link"
              download
              large
            >
              <v-icon left> mdi-cloud-download </v-icon>
              {{ download.title }}
            </v-btn>
          </v-col>
        </v-row>
        <v-divider></v-divider>
        <div v-if="correctionsActive">
          <v-row>
            <v-col> <h1>Corrections</h1></v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-btn
                v-for="correction in corrections"
                :key="correction.title"
                class="ma-2"
                :href="'/formation/corrections/' + correction.link"
                download
                large
              >
                <v-icon left> mdi-folder-zip </v-icon>
                {{ correction.title }}
              </v-btn>
            </v-col>
          </v-row>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
import _ from 'lodash'

export default {
  data() {
    return {
      downloads: [],
      correctionsActive: false,
    }
  },
  computed: {
    ...mapGetters({ module: 'getModule' }),
  },
  mounted() {
    this.downloads = require.context('@/static/download/', true, /.pdf$/).keys()
    this.corrections = require
      .context('@/static/corrections/', true, /.zip$/)
      .keys()
    this.updateArray(this.downloads, this.module)
    this.updateArray(this.corrections, this.module)
  },
  methods: {
    updateArray: (array, module) => {
      const elementsToDelete = []
      array.forEach((element, index) => {
        if (element.includes(module)) {
          array[index] = {
            title: element.match(/TP[\d^.*]/)[0],
            link: element.match(/[^.].*/)[0],
          }
        } else elementsToDelete.push(array[index])
      })
      _.pullAll(array, elementsToDelete)
    },
  },
}
</script>

<style lang="scss">
@import '../assets/sass/custom-variables.scss';
#tp-list.php {
  background-color: $--php-color-2;
}
</style>
