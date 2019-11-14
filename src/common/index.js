import Vue from "vue";
import Topbar from "./topbar/index.vue";

const componentMap = [
    Topbar
]


componentMap.forEach((item)=>{
    Vue.component(item.name,item)
})

