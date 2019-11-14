import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from './shouye'
import Find from './find'
import Preferential from "./preferential"
import More from './more'
import Equip from './equip'
import Register from './register'
import Brand from './brand/'
import { all } from 'any-promise'
import Basketball from "./equip/basketball.js"
Vue.use(VueRouter)



const router = new VueRouter({
  mode: 'hash',
  linkActiveClass: 'active',
  routes: [
    {
      path: "/",
      redirect: "/shouye",
    },
    Index,
    Find,
    Preferential,
    More,
    Equip,
    Register,
    Brand,
    Basketball,
    {
      name:"Running",
      path:"/running",
      component:() =>import ("@pages/running")

    },
    {
      path: "/column",
      component: () => import("@pages/column"),
      name: "column",
      meta: {
        title: "识货栏目",
        tabBarFlag: false,
        requiredAuth: false
      },
    }
  ]

})

export default router
