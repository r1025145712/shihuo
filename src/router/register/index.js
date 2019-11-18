export default {
    path: "/register",
    component: _ => import("@pages/register"),
    name: "register",
    meta: {
        title: "登录",
        tabBarFlag: false,
        requiredAuth: false
    }
}