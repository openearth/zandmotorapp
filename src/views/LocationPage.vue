<template>
  <div class="location-page">
    <location-menu />
    <!-- <map-component /> -->
    <router-view class="location-component" />
  </div>
</template>

<script>
import LocationMenu from '@/components/LocationMenu'
// import MapComponent from '@/components/MapComponent'

export default {
  components: {
    LocationMenu
    // MapComponent
  }
}
</script>

<style scoped>
.location-page {
  height: 100vh;
  width: 100vw;
}

.location-component {
  overflow-y: auto;
}
</style>
