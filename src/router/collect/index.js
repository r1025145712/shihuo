export default {
    path:"/collect",
    component:()=>import("@pages/collect"),
    meta:{
        title:"我的收藏",
        tabBarFlag:true,
        requiredAuth:true
    }
}