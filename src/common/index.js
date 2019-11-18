import Vue from "vue";
import Topbar from "./topbar/index.vue";
<<<<<<< HEAD
import Search from "./search/index.vue"
=======
import JackScroll from "./jackScroll/index.vue"

>>>>>>> xs
const componentMap = [
    Topbar,Search
]


componentMap.forEach((item)=>{
    Vue.component(item.name,item)
})

