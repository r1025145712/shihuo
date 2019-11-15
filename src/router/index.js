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
      path: "/column/:columnId",
      component: () => import("@pages/column"),
      name: "column",
      meta: {
        title: "装备评测",
        tabBarFlag: false,
        requiredAuth: false
      },
    },
    {
      path: "/hotnews/:columnId",
      component: () => import("@pages/hotnews"),
      name: "hotnews",
      meta: {
        title: "热门资讯",
        tabBarFlag: false,
        requiredAuth: false
      },
    }
  ]

})

// router.beforeEach((to,from,next)=>{
//   document.title = to.meta.title;
//   // console.log(to)
//   if(to.path !="register" && to.meta.requiredAuth){
//       if(localStorage.getItem("token")){
//           next()
//       }else{
//           next({name:"register",params:{path:to.path}})
//       }
//   }else{
//       next();
//   }
// })
export default router
