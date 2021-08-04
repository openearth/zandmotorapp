<template>
  <v-app>
    <app-header :showLegalDialog.sync="showLegalDialog" />
    <legal-dialog :showLegalDialog="showLegalDialog" @closeDialog="showLegalDialog = false"/>
    <v-main class="main">
      <router-view/>
    </v-main>
  </v-app>
</template>
<script>
import AppHeader from '@/components/AppHeader'
import LegalDialog from '@/components/LegalDialog'
import { mapActions } from 'vuex'

export default {
  components: {
    AppHeader,
    LegalDialog
  },
  data () {
    return {
      showLegalDialog: false
    }
  },
  mounted () {
    this.readConfiguration()
  },
  methods: {
    ...mapActions(['readConfiguration'])
  }
}
</script>

<style>
main {
  margin-top: 48px;
  position: fixed;
  overflow-y: hidden;
  width: 100%;
}

html {
  overflow: hidden !important;
}
</style>
