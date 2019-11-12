import http from "@utils/request";


export const preferentialShop=(id)=>http({
    method:"get",
    url:"/api/youhui/list?r=999&page=2&page_size=30",
    data:{
        publish_date:id,
    }
})