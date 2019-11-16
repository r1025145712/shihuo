import http from "@utils/request";

export const basketBall = (data)=>http({
    method:"get",
    url:"/api/sports/getNews",
    data:data
})


export const equip = (data)=>http({
    method:"post",
    url:"/api/zhuangbei/getHomeNews",
    data:data
})  

export const search = (data)=>http({
    method:"get",
    url:"/api/search/relatedKeywords",
    data:data
})

export const searchClassName = (data)=>http({
    method:"get",
    url:"/api/search",
    data:data
})

// search/relatedKeywords?keywords=adidasi