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
            path:"/preferential/preferentialSelected",
            component:_=>import("@components/preferential/preferentialSelected"),
            name:"preferentialSelected",
            meta: {
                tabBarFlag: true,
                requiredAuth: false
            },
        },
        //鞋类
        {
            path:"/preferential/preferentialFootwear",
            component:_=>import("@components/preferential/preferentialFootwear"),
            name:"preferentialFootwear",
            meta: {
                tabBarFlag: true,
                requiredAuth: false
            },
        },
        //服饰
        {
            path:"/preferential/preferentialTrappings",
            component:_=>import("@components/preferential/preferentialTrappings"),
            name:"preferentialTrappings",
            meta: {
                tabBarFlag: true,
                requiredAuth: false
            },
        },
        //数码
        {
            path:"/preferential/preferentialDigital",
            component:_=>import("@components/preferential/preferentialDigital"),
            name:"preferentialDigital",
            meta: {
                tabBarFlag: true,
                requiredAuth: false
            },
        },
        //兴趣
        {
            path:"/preferential/preferentialInterest",
            component:_=>import("@components/preferential/preferentialInterest"),
            name:"preferentialInterest",
            meta: {
                tabBarFlag: true,
                requiredAuth: false
            },
        },

    ]

}