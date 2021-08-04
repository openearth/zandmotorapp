<template>
  <div class="weather">
    <date-selection />
    <v-card class="mx-auto" flat max-width="700px">
      <v-data-table
          :headers="headers"
          :items="tableItems"
          item-key="variable"
          group-by="category"
          class="elevation-1 px-3"
          hide-default-footer
          disable-sort
          flat
        >
        <!-- eslint-disable-next-line -->
        <template v-slot:group.header="{ items }">
          <th colspan="3">
            {{ items[0].category }}
          </th>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>

<script>
import DateSelection from '@/components/DateSelection.vue'
import { mapGetters } from 'vuex'
import _ from 'lodash'

const meteoData = [
  {
    name: 'Snelheid',
    unit: 'm/s',
    variable: 'windspeed',
    category: 'Wind'
  },
  {
    name: 'Richting',
    unit: '°N',
    variable: 'winddir',
    category: 'Wind'
  },
  {
    name: 'Lucht',
    unit: '°C',
    variable: 'airtemp',
    category: 'Temperatuur'
  },
  {
    name: 'Water',
    unit: '°C',
    variable: 'seatemp',
    category: 'Temperatuur'
  },
  {
    name: 'Richting',
    unit: '°N',
    variable: 'wavedir',
    category: 'Golven'
  },
  {
    name: 'Hoogte',
    unit: 'm',
    variable: 'waveheight',
    category: 'Golven'
  },
  {
    name: 'Periode',
    unit: 's',
    variable: 'waveper',
    category: 'Golven'
  }
]

export default {
  components: { DateSelection },
  data () {
    return {
      headers: [
        {
          text: 'Weer gegevens',
          align: 'start',
          value: 'name',
          groupable: false,
          width: '60%'
        },
        { text: 'Waarde', value: 'value', align: 'right', width: '10%' },
        { text: 'Eenheid', value: 'unit', align: 'right', width: '10%' }
      ]
    }
  },
  computed: {
    ...mapGetters(['locations', 'currentImage']),
    locationData () {
      const location = this.$route.params.location
      return this.locations.find((loc) => loc.title === location)
    },
    meteoData () {
      const location = _.get(this.locationData, 'data', '')
      return _.get(this.locationData, `results.${location}.meteo`, [])
    },
    tableItems () {
      const meteo = _.get(this.meteoData, `[${this.currentImage}]`, [])
      return meteoData.map(data => {
        data.value = _.get(meteo, data.variable, 'Geen data gevonden')
        return data
      })
    }
  }
}
</script>

<style scoped>
.weather {
  height: 100%;
  width: 100%;
}

.weather-content {
  width: 100%;
}
</style>
