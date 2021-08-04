<template>
  <v-mapbox
    :access-token="mapboxToken"
    map-style="mapbox://styles/mapbox/light-v10?optimize=true"
    class="map"
    ref="map"
    :center="[-75.789, 41.874]"
  >
  </v-mapbox>
</template>

<script>
export default {
  data () {
    return {
      map: null
    }
  },
  mounted () {
    this.map = this.$refs.map.map

    this.map.on('load', () => {
      this.map.addSource('radar', {
        type: 'image',
        url: 'https://docs.mapbox.com/mapbox-gl-js/assets/radar.gif',
        coordinates: [
          [-80.425, 46.437],
          [-71.516, 46.437],
          [-71.516, 37.936],
          [-80.425, 37.936]
        ]
      })
      this.map.addLayer({
        id: 'radar-layer',
        type: 'raster',
        source: 'radar',
        paint: {
          'raster-fade-duration': 0
        }
      })
    })
  }
}
</script>
