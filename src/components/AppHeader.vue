<template>
  <v-app-bar
    color="primary"
    dark
    dense
    fixed
  >
    <v-app-bar-nav-icon to="/locaties">
      <v-icon>mdi-home</v-icon>
    </v-app-bar-nav-icon>
    <v-toolbar-title>
      {{ toolbarTitle }}
    </v-toolbar-title>

    <v-spacer />
      <v-tooltip bottom max-width="200px">
        <template v-slot:activator="{ on }">
          <v-btn class="ma-auto" v-on="on" icon @click.stop="$emit('update:showLegalDialog', true)">
            <v-icon>mdi-information</v-icon>
          </v-btn>
        </template>
        <span>Brengt de disclaimer met informatie terug in beeld.</span
        >
      </v-tooltip>
  </v-app-bar>
</template>

<script>
export default {
  props: {
    showLegalDialog: {
      type: Boolean
    }
  },
  computed: {
    toolbarTitle () {
      let title = 'Zandmotorapp'
      const location = this.$route.params.location
      title = location ? `${title} - ${location}` : title
      return title
    }
  }
}
</script>

<style>
.app-header {
  left: 0 !important;
}
</style>
