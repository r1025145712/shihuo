const preferentialSelected = () => import('@components/preferential/preferentialSelected')
const preferentialFootwear = () => import('@components/preferential/preferentialFootwear')
const preferentialTrappings = () => import('@components/preferential/preferentialTrappings')
const preferentialDigital = () => import('@components/preferential/preferentialDigital')
const preferentialInterest = () => import('@components/preferential/preferentialInterest')


export default {
    path: "/preferential",
    component: () => import("@pages/preferential"),
    name: "preferential",
    meta: {
        tabBarFlag: true,
        requiredAuth: false
    },
    children: [
        {
            path:"/preferential",
            redirect:"/preferential/preferentialSelected"
        },
        //精选
        {
            path:"preferentialSelected",
            component:preferentialSelected,
            // component:_=>import("@components/preferential/preferentialSelected"),
            // component:resovle =>require(["@components/preferential/preferentialSelected"],resovle),
            name:"preferentialSelected",
            meta: {
                tabBarFlag: true,
                requiredAuth: false
            },
        },
        //鞋类
        {
            path:"preferentialFootwear",
            component:preferentialFootwear,
            // component:_=>import("@components/preferential/preferentialFootwear"),
            name:"preferentialFootwear",
            meta: {
                tabBarFlag: true,
                requiredAuth: false
            },
        },
        //服饰
        {
            path:"preferentialTrappings",
            component:preferentialTrappings,
            // component:_=>import("@components/preferential/preferentialTrappings"),
            name:"preferentialTrappings",
            meta: {
                tabBarFlag: true,
                requiredAuth: false
            },
        },
        //数码
        {
            path:"preferentialDigital",
            component:preferentialDigital,
            // component:_=>import("@components/preferential/preferentialDigital"),
            name:"preferentialDigital",
            meta: {
                tabBarFlag: true,
                requiredAuth: false
            },
        },
        //兴趣
        {
            path:"preferentialInterest",
            component:preferentialInterest,
            // component:_=>import("@components/preferential/preferentialInterest"),
            name:"preferentialInterest",
            meta: {
                tabBarFlag: true,
                requiredAuth: false
            },
        },

    ]

}