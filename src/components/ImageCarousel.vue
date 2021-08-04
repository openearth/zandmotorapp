<template>
  <v-carousel hide-delimiters v-model="currentImageHandler" height="100%">
    <v-carousel-item
      v-for="(item, i) in images"
      :key="i"
      transition="none"
    >
      <v-img
        :src="getImageLocation(item.png)"
        contain
        max-height="100%"
        max-width="100%"
      ></v-img>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import _ from 'lodash'

export default {
  props: {
    images: {
      type: Array
    }
  },
  computed: {
    ...mapGetters(['locations', 'currentImage']),
    currentImageHandler: {
      get () {
        return this.currentImage
      },
      set (val) {
        console.log('val', val)
        this.setCurrentImage(val)
      }
    },
    locationData () {
      const location = this.$route.params.location
      return this.locations.find(loc => loc.title === location)
    },
    currents () {
      const data = _.get(this.locationData, 'data', '')
      console.log(this.locationData, data)
      return _.get(this.locationData, `results.${data}.currents`, [])
    }
  },
  methods: {
    ...mapMutations(['setCurrentImage']),
    getImageLocation (imagePath) {
      const data = _.get(this.locationData, 'data', '')
      const url = `./mobileapp/results/${data}/${imagePath}`
      return url
    }
  }
}
</script>

<style scoped>
.currents {
  height: 100%;
  width: 100%;
}
</style>
