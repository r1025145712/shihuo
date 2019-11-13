export default {
    path:"/shouye",
    component:()=>import("@pages/shouye"),
    name:"shouye",
    meta:{
        title:"识货 - 高性价比商品导购",
        tabBarFlag:true,
        requiredAuth:false
    },
//     children:[{
//         path:"commend",
//         component:()=>import("@components/list/commend.vue"),
//         meta:{
//             title:"推荐",
//             tabBarFlag:true,
//             requiredAuth:false
//         }
//     },
//     {
//         path:"basketball",
//         component:()=>import("@components/list/commend.vue"),

//         meta:{
//             title:"篮球",
//             tabBarFlag:true,
//             requiredAuth:false
//         },
        
//     },{
//         path:"running",
//         component:()=>import("@components/list/commend.vue"),

//         meta:{
//             title:"跑步",
//             tabBarFlag:true,
//             requiredAuth:false
//         },
        
//     },
//     {
//         path:"fitness",
//         component:()=>import("@components/list/commend.vue"),
 
//         meta:{
//             title:"健身",
//             tabBarFlag:true,
//             requiredAuth:false
//         },
        
//     },
//     {
//         path:"sofreestyleom",
//         component:()=>import("@components/list/commend.vue"),

//         meta:{
//             title:"潮流",
//             tabBarFlag:true,
//             requiredAuth:false
//         },
        
//     },
// ]
// }
}