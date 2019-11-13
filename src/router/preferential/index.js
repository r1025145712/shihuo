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
        {
            path:"/preferential/preferentialSelected",
            component:_=>import("@components/preferential/preferentialSelected"),
            name:"preferentialSelected",
            meta: {
                tabBarFlag: true,
                requiredAuth: false
            },
        }
    ]

}