import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from './shouye'
import Find from './find'
import Preferential from "./preferential"
import More from './more'
import Equip from './equip'
import Register from './register'
import Brand from './brand/'
import Collect from './collect'
import { all } from 'any-promise'
import Basketball from "./equip/basketball.js"
import SearchShop from "@pages/searchshop"


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
    Collect,
    {
      path:"/searchshop",
      component:SearchShop
    },
    
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
    },
    {
      path:"detail/:title/:img/:intro/:price",
      component: () => import("@pages/details"),
      name: "detail",
      meta: {
        title: "商品详情",
        tabBarFlag: false,
        requiredAuth: false
      },
        // props:true
    }
  ]

})

// router.beforeEach((to,from,next)=>{
//   document.title = to.meta.title;
//   // console.log(to)
//   if(to.path !="register" && to.meta.requiredAuth){
//       if(sessionStorage.getItem("user")){
//           next()
//       }else{
//           next({name:"register",params:{path:to.path}})
//       }
//   }else{
//       next();
//   }
// })
export default router
