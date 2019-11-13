import http from "@utils/request";


export const preferentialSelected=(publish_date)=>http({
    method:"get",
    url:"/api/youhui/list",
    data:{
        r:999,
        page:2,
        page_size:30,
        publish_date:publish_date
    }
})


export const preferentialFootwear=(publish_date)=>http({
    method:"get",
    url:"/api/youhui/list",
    data:{
        r:1,
        page:1,
        page_size:30,
        publish_date:publish_date
    }
})





export const preferentialTrappings=(publish_date)=>http({
    method:"get",
    url:"/api/youhui/list",
    data:{
        r:2,
        page:1,
        page_size:30,
        publish_date:publish_date
    }
})





export const preferentialDigital=(publish_date)=>http({
    method:"get",
    url:"/api/youhui/list",
    data:{
        r:3,
        page:1,
        page_size:30,
        publish_date:publish_date
    }
})


export const preferentialInterest=(publish_date)=>http({
    method:"get",
    url:"/api/youhui/list",
    data:{
        r:4,
        page:1,
        page_size:30,
        publish_date:publish_date
    }
})

























