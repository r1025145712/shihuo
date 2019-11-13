import http from "@utils/request";
/*
* 
* 接口:城市列表
*/
export const brandApi = (r)=>http({
    method:"get",
    url:"/api/youhui/brandSale11",
    data:{
        r:r,
        news_id:0,
        page:1
    }
})
export const columnApi = ()=>http({
    method:"get",
    url:"/api/column/getList",
    data:{
        columnId:137,
        pageSize:20,
        page:1
    }
})