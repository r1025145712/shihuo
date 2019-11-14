export default {
    path:"/shouye",
    component:()=>import("@pages/shouye"),
    name:"shouye",
    meta:{
        title:"识货 - 高性价比商品导购",
        tabBarFlag:true,
        requiredAuth:false
    },
    children:[
        {
            path:"/shouye",
            redirect:"/shouye/quanbu/q"
        }
        ,{
        path:"commend/:type/",
        component:()=>import("@components/list"),
        meta:{
            title:"推荐",
            tabBarFlag:true,
            requiredAuth:false
        },
    },
    // {
    //     path:"basketball/:type",
    //     component:()=>import("@components/list"),
    //     meta:{
    //         title:"篮球",
    //         tabBarFlag:true,
    //         requiredAuth:false
    //     },
        
    // },{
    //     path:"running/:type",
    //     component:()=>import("@components/list"),

    //     meta:{
    //         title:"跑步/:type",
    //         tabBarFlag:true,
    //         requiredAuth:false
    //     },
        
    // },
    // {
    //     path:"fitness/:type",
    //     component:()=>import("@components/list"),
 
    //     meta:{
    //         title:"健身",
    //         tabBarFlag:true,
    //         requiredAuth:false
    //     },
        
    // },
    // {
    //     path:"freestyle/:type",
    //     component:()=>import("@components/list"),
    //     meta:{
    //         title:"潮流",
    //         tabBarFlag:true,
    //         requiredAuth:false
    //     },
    // },
    {
        path:"quanbu/:channel_type",
        component:()=>import("@components/list"),
        meta:{
            title:"全部",
            tabBarFlag:true,
            requiredAuth:false
        },
        
    },
    // {
    //     path:"danpin/:channel_type",
    //     component:()=>import("@components/list"),
    //     meta:{
    //         title:"单品",
    //         tabBarFlag:true,
    //         requiredAuth:false
    //     },
        
    // },
    // {
    //     path:"yuanchuang/:channel_type",
    //     component:()=>import("@components/list"),
    //     meta:{
    //         title:"原创",
    //         tabBarFlag:true,
    //         requiredAuth:false
    //     },
        
    // },
    // {
    //     path:"user/:channel_type",
    //     component:()=>import("@components/list"),
    //     meta:{
    //         title:"用户",
    //         tabBarFlag:true,
    //         requiredAuth:false
    //     },
        
    // },
]
}