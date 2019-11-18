export default {
    path:"/search",
    component:()=>import("@pages/search"),
    name:"search",
    meta:{
        title:"搜索",
        tabBarFlag:true,
        requiredAuth:false
    },
}