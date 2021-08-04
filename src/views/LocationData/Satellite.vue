<template>
  <div class="satellite pa-2">
    <v-img :src="satellite" contain max-height="100%" max-width="100%"></v-img>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['satellite'])
  }
}
</script>

<style scoped>
.satellite {
  width: 100%;
  height: calc(100% - 2 * 48px);
}
</style>
