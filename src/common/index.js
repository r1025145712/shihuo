import Vue from "vue";
import Topbar from "./topbar/index.vue";
import JackScroll from "./jackScroll/index.vue"
const componentMap = [
    Topbar,JackScroll
]


componentMap.forEach((item)=>{
    Vue.component(item.name,item)
})

