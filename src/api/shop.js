import http from "@utils/request";
/*
* 
* 接口:城市列表
*/
export const brandApi = (r,p)=>http({
    method:"get",
    url:"/api/youhui/brandSale11",
    data:{
        r:r,
        news_id:0,
        page:p||2
    }
})
export const columnApi = (columnId)=>http({
    method:"get",
    url:"/api/column/getList",
    data:{
        columnId:columnId,
        pageSize:20,
        page:1
    }
})
// 注册
export const userApi = (username,password)=>http({
    method:"post",
    url:"node//users/register",
    data:{
        username: username,
        password: password,
    }
})
// 登录
export const loginApi = (username,password)=>http({
    method:"post",
    url:"node/users/login",
    data:{
        username: username,
        password: password,
    }
})
// 修改图片
export const modifyApi = (formData)=>http({
    method:"post",
    url:"node/upload/urlImage",
    data:formData, 
    processData: false,
    cache: false,
    // contentType: "multipart/form-data",
    headers: { "content-type": "multipart/form-data" }
})
// 修改资料
export const modify1Api = (name,img,id)=>http({
    method:"post",
    url:"node/users/modify",
    data: {
        name2:name,
        img,
        id
    },
})
export const listApi = (type,channel_type,p_str)=>http({
    method:"get",
    url:"/api/homefis/getNews",
    data:{
        type:type||"",
        pageSize:20,
        param_str:p_str,
        channel_type:channel_type||''
    }
})



// 发现接口

export const finds=(id)=>http({
    method:"get",
    url:"/api/find/mobileList",
    data:{
        tag_id:id
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

























