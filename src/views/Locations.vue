<template>
  <div class="locations">
    <v-list two-line>
      <v-list-item-group
        color="primary"
      >
        <v-list-item
          v-for="location in locations"
          :key="location.name"
          @input="$router.push({ path: `${location.title}/stroming` })"
        >
          <v-list-item-avatar>
            <v-img :src="location.avatar"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title v-text="location.title"></v-list-item-title>
            <v-list-item-subtitle v-text="location.subtitle"></v-list-item-subtitle>
          </v-list-item-content>
            <v-list-item-icon>
              <v-icon>mdi-chevron-right</v-icon>
            </v-list-item-icon>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['locations'])
  }
}
</script>

<style scoped>
.locations {
  width: 100%;
  height: 100%;
}
</style>
