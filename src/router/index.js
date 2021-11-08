import Vue from 'vue'
import VueRouter from 'vue-router'
import Locations from '@/views/Locations.vue'
import LocationPage from '@/views/LocationPage.vue'
import Currents from '@/views/LocationData/Currents.vue'
import DryBeach from '@/views/LocationData/DryBeach.vue'
import Weather from '@/views/LocationData/Weather.vue'
import Satellite from '@/views/LocationData/Satellite.vue'
import OutOfOrder from '@/views/LocationData/OutOfOrder.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/locaties',
    name: 'Locaties',
    component: Locations
  },
  {
    path: '/',
    redirect: '/locaties',
    name: 'Locaties',
    component: Locations
  },
  {
    path: '/:location',
    name: 'Location',
    component: LocationPage,
    children: [
      {
        path: 'out-of-order',
        name: 'out-of-order',
        component: OutOfOrder
      },
      {
        path: 'stroming',
        name: 'Stroming',
        component: Currents
      },
      {
        path: 'droogval',
        name: 'Droogval',
        component: DryBeach
      },
      {
        path: 'weer',
        name: 'Weer',
        component: Weather
      },
      {
        path: 'satelliet',
        name: 'Satelliet',
        component: Satellite
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
