export default {
    path:"/brand",
    component:()=>import("@pages/brand"),
    name:"brand",
    meta:{
        title:"识货发现",
        tabBarFlag:false,
        requiredAuth:false
    },
    children:[
            {
                path:"/brand/undefined",
                redirect:"/brand/whole/0"
            },
            {
                path:"whole/:id",
                component:()=>import("@components/whole"),
                meta:{
                    title:"全部",
                    tabBarFlag:true,
                    requiredAuth:false
                }
            },
            {
                path:"motion/:id",
                component:()=>import("@components/whole"),
                meta:{
                    title:"运动",
                    tabBarFlag:true,
                    requiredAuth:false
                }
            },
            {
                path:"clothes/:id",
                component:()=>import("@components/whole"),
                meta:{
                    title:"男装",
                    tabBarFlag:true,
                    requiredAuth:false
                }
            },
            {
                path:"digital/:id",
                component:()=>import("@components/whole"),
                name:"digital",
                meta:{
                    title:"数码",
                    tabBarFlag:true,
                    requiredAuth:false
                }
            },
            {
                path:"other/:id",
                component:()=>import("@components/whole"),
                meta:{
                    title:"其他",
                    tabBarFlag:true,
                    requiredAuth:false
                }
            },
        ]
}