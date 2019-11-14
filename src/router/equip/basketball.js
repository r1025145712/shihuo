export default{
    name:"Basketball",
    path:"/basketball",
    redirect:"/basketball/all",
    component:() =>import ("@pages/basketball"),
    children:[
      {
        name:"all",
        path:"all",
        component:_ => import ("@components/basketball/all")
      },
      {
        name:"single",
        path:"single",
        component:_ => import ("@components/basketball/single")
      },
      {
        name:"daman",
        path:"daman",
        component:_ => import ("@components/basketball/daman")
      },
      {
        name:"drying",
        path:"drying",
        component:_ => import ("@components/basketball/drying")
      }
    ]
}