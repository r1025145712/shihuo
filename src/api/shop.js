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
export const listApi = (type,channel_type)=>http({
    method:"get",
    url:"/api/homefis/getNews",
    data:{
        type:type,
        pageSize:20,
        // param_str:p_str,
        channel_type:channel_type
    }
})




// 优惠接口
// 精选接口
export const preferentialSelected=(publish_date)=>http({
    method:"get",
    url:"/api/youhui/list",
    data:{
        r:999,
        page:1,
        page_size:30,
        publish_date:publish_date
    }
})

// 鞋类接口
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

// 服饰接口
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

// 数码接口
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

// 兴趣接口
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

























