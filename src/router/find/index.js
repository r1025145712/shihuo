export default {
    path:"/find",
    component:()=>import("@pages/find"),
    name:"find",
    meta:{
        title:"识货发现",
        tabBarFlag:true,
        requiredAuth:false
    }
}