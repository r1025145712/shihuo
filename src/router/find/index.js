
import finds from "../../components/finds"


export default {
    path:"/find",
    component:()=>import("@pages/find"),
    name:"find",
    meta:{
        title:"识货发现",
        tabBarFlag:true,
        requiredAuth:false
    },
    children:[
        {
            path:"/find",
            redirect:"/find/今日推荐/283"
        },
        {
            path:"今日推荐/:id",
            component:finds,
            meta: {
                tabBarFlag: true,
                requiredAuth: false
            },
        },
        {
            path:"篮球/:id",
            component:finds,
            meta: {
                tabBarFlag: true,
                requiredAuth: false
            },
        },
        {
            path:"视频/:id",
            component:finds,
            meta: {
                tabBarFlag: true,
                requiredAuth: false
            },
        },
        {
            path:"最新资讯/:id",
            component:finds,
            meta: {
                tabBarFlag: true,
                requiredAuth: false
            },
        },
        {
            path:"潮流风向/:id",
            component:finds,
            meta: {
                tabBarFlag: true,
                requiredAuth: false
            },
        },
        {
            path:"3C新奇特/:id",
            component:finds,
            meta: {
                tabBarFlag: true,
                requiredAuth: false
            },
        },
        {
            path:"潮鞋志/:id",
            component:finds,
            meta: {
                tabBarFlag: true,
                requiredAuth: false
            },
        },
        {
            path:"球鞋90秒/:id",
            component:finds,
            meta: {
                tabBarFlag: true,
                requiredAuth: false
            },
        },
    ]
}