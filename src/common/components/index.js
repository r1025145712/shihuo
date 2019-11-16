import Vue from "vue";
import RScroll from "./bscroll/index.vue";
import BScroll from "./better/index.vue"

// 全局注册
let componentMap =[
    RScroll,
    BScroll
];
componentMap.forEach(item =>{
    Vue.component(item.name,item)
})
// Vue.component("RScroll",RScroll)
