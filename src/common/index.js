import Vue from "vue";
import Topbar from "./topbar/index.vue";
import Search from "./search/index.vue"
const componentMap = [
    Topbar,Search
]


componentMap.forEach((item)=>{
    Vue.component(item.name,item)
})

