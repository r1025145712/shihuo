import http from "@utils/request";

export const basketBall = (data)=>http({
    method:"get",
    url:"/api/sports/getNews",
    data:data
})