<template>
  <v-toolbar width="100%" fixed dense>
    <v-tabs
      dark
      background-color="primary"
      grow
    >

      <v-tab to="out-of-order" v-if="idle">
        Out of order
      </v-tab>

      <v-tab to="stroming" v-if="!idle">
        Stroming
      </v-tab>

      <v-tab to="droogval" v-if="!idle">
        Droogval
      </v-tab>

      <v-tab to="weer" v-if="!idle">
        Weer
      </v-tab>

      <v-tab to="satelliet">
        Satelliet
      </v-tab>
    </v-tabs>
  </v-toolbar>
</template>

<script>
export default {
  computed: {
    idle () {
      return process.env.VUE_APP_STATUS === 'idle'
    }
  }
}
</script>
