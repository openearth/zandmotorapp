import Vue from 'vue'
import Vuex from 'vuex'
import moment from 'moment'

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
      state.locations.push(locations)
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
      conf.locations.forEach((loc, index) => {
        const dataName = loc.data
        fetch(`./mobileapp/results/${dataName}/${dataName}.json`)
          .then(res => res.json())
          .then(response => {
            loc.results = response
            store.commit('setLocations', loc)
            if (index === 0) {
              store.dispatch('setInitialImage', Object.entries(response)[0][1])
            }
          })
      })
      store.commit('setSatellite', conf.satellite)
    },
    setInitialImage (store, results) {
      const dates = results.currents
      const now = moment()
      const diffdates = dates.map(date => {
        date = moment(date.datetime, 'ddd DD MMM HH:mm')
        return Math.abs(now.diff(date))
      })
      const diffIndex = diffdates.indexOf(Math.min(...diffdates))
      store.commit('setCurrentImage', diffIndex)
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
