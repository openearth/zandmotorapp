import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    locations: [],
    currentImage: 0,
    acceptedLegal: false,
    satellite: null
  },
  mutations: {
    setAcceptedLegal (state, value) {
      state.acceptedLegal = value
    },
    setLocations (state, locations) {
      state.locations = locations
    },
    setSatellite (state, satellite) {
      state.satellite = satellite
    },
    setCurrentImage (state, currentImage) {
      state.currentImage = currentImage
    }
  },
  actions: {
    readConfiguration (store) {
      const conf = require('@/assets/conf.json')
      conf.locations.forEach(loc => {
        const dataName = loc.data
        const result = require(`${process.env.BASE_URL}public/results/${dataName}/${dataName}.json`)
        loc.results = result
      })
      store.commit('setLocations', conf.locations)
      store.commit('setSatellite', conf.satellite)
    }
  },
  getters: {
    locations (state) {
      return state.locations
    },
    currentImage (state) {
      return state.currentImage
    },
    satellite (state) {
      return state.satellite
    }
  },
  modules: {
  }
})
