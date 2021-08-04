<template>
  <v-container fluid>
    <v-row class="weather-content">
      <v-col cols="2">
        <v-btn v-if="currentImage > 0" class="float-right" outlined icon @click="back">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-col>
      <v-col cols="8">
        <v-combobox
          v-model="selectedDate"
          :items="dates"
          label="Datum en tijd selectie"
          outlined
          dense
          hide-details
          :item-text="convertDatetime"
        ></v-combobox>
      </v-col>
      <v-col cols="2">
        <v-btn v-if="currentImage < dates.length - 1"  class="float-left" outlined icon @click="forward">
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import _ from 'lodash'
import moment from 'moment'

moment.locale('nl')

export default {
  computed: {
    ...mapGetters(['currentImage', 'locations']),
    selectedDate: {
      get () {
        return this.dates[this.currentImage]
      },
      set (val) {
        const index = this.dates.findIndex(date => date.datetime === val.datetime)
        this.setCurrentImage(index)
      }
    },
    locationData () {
      const location = this.$route.params.location
      console.log(location, this.locations, this.locations.find(loc => loc.title === location))
      return this.locations.find(loc => loc.title === location)
    },
    dates () {
      const data = _.get(this.locationData, 'data', '')
      console.log('dates?', data)
      return _.get(this.locationData, `results.${data}.currents`, [])
    }
  },
  methods: {
    ...mapMutations(['setCurrentImage']),
    convertDatetime (date) {
      return date.datetime
    },
    forward () {
      this.setCurrentImage(this.currentImage + 1)
    },
    back () {
      this.setCurrentImage(this.currentImage - 1)
    }
  }
}
</script>
