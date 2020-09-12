import Vue from 'vue'
import VueRouter from 'vue-router'
import BTCConverter from '../components/BTCConverter.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'BTC a Bs / Bs a BTC',
    component: BTCConverter,
    meta:{title:'BTC a Bs / Bs a BTC'}
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
