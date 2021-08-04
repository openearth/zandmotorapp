<template>
  <div class="currents">
    <date-selection />
    <v-card flat class="px-2" height="45%" >
      <v-img :src="getImage('drybeach')" contain max-height="100%" max-width="100%"></v-img>
    </v-card>
    <v-card flat class="pb-2" height="30%" >
      <v-img :src="getImage('waterlevel')" contain max-height="100%" max-width="100%"></v-img>
    </v-card>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import _ from 'lodash'
import DateSelection from '@/components/DateSelection.vue'

export default {
  components: { DateSelection },
  computed: {
    ...mapGetters(['locations', 'currentImage']),
    locationData () {
      const location = this.$route.params.location
      return this.locations.find(loc => loc.title === location)
    }
  },
  methods: {
    getImage (name) {
      const data = _.get(this.locationData, 'data', '')
      const imagePath = _.get(this.locationData, `results.${data}.${name}[${this.currentImage}].png`, [])
      const url = `./results/${data}/${imagePath}`
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
