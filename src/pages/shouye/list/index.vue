<template>
     <section class="listView">
                <div class="list-view-top">
                    <div class="list-menu">
                        <ul>
                            <li v-for="(item,index) in sort " :key="index">{{item.text}}</li>
                        </ul>
                    </div>
                    <div class="list-submenu">
                        <ul class="clearfix">
                            <li v-for="(list,index) in category " :key="index">{{list.text}}</li>
                        </ul>
                    </div>
                </div>
                <!-- 列表详情 -->
                <div class="list-view">
                    <ul>
                        <li>
                            <a class="link-a clearfix" href="">
                                <div class="imgs">
                                    <span class="get_imgs">
                                        <img get="true" class="lazy"
                                            src="http://shihuo.hupucdn.com/newsIndex11/201910/3117/a08bd56f027f44441a7b0f3996120dd3.jpg?imageView2/0/w/600/h/600/interlace/1">
                                    </span>
                                    <!-- <span class="top">置顶</span>  -->
                                </div>
                                <div class="details_box">
                                    <h2>双11超级红包 | 1号0点奖池加码！奖池金额超3000万！签到活动上线！</h2>
                                    <p class="subtitle">奖池加码 | 开始签到</p>
                                    <div class="from">
                                        <div class="column_name"> <span>双十一全攻略</span>&nbsp;天猫 </div>
                                    </div>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
</template>
<script>
export default {
    name:"list",
    data(){
        return{
            sort:[{
                path:"1",
                text:"推荐",
                type:""
            },{
                path:"1",
                text:"篮球",
                 type:"basketball"
            },{
                path:"1",
                text:"跑步",
                 type:"running"
            },{
                path:"1",
                text:"健身",
                 type:"fitness"
            },{
                path:"1",
                text:"潮流",
                type:"freestyle"
            }],
            category:[{
                 path:"1",
                text:"全部", 
            },
            {
                 path:"1",
                text:"单品推荐", 
            },
            {
                 path:"1",
                text:"原创精选", 
            },
            {
                 path:"1",
                text:"用户晒物", 
            }]
        }
    }
}
</script>


<style scoped>
    .listView{
    display: flex;
    flex-direction:column ;
}
.list-view-top {
    background-color: #FFF;
    border-bottom: 1px solid #eee;
    width: 100%;
    overflow: hidden;
}
.list-view-top .list-menu {
    height: .34rem;
    line-height:  .34rem;
    padding: 0 .21rem;
}
.list-view-top .list-menu ul {
    display: flex;
    justify-content: space-between;
}
.list-view-top .list-menu li {
    font-size: .13rem;
    font-weight: 700;
    color: #333;
    float: left;
    position: relative;
}
.list-view-top .list-menu li.on {
    color: #FF4338;
}
.list-view-top .list-menu li.on:after {
    content: "";
    width: .16rem;
    display: block;
    position: absolute;
    bottom: .02rem;
    left: 50%;
    margin-left: -0.08rem;
    border-radius: .04rem;
    height: .02rem;
    background-color: #FF4338;
}
.list-view-top .list-submenu {
    overflow-x: auto;
    margin-top:.05rem;
    padding: 0 0 .1rem .125rem ;
}
.list-view-top .list-submenu ul {
    white-space: nowrap;
    display: flex;
    justify-content: space-around;
}
.list-view-top .list-submenu li {
    display: inline-block;
    height: .22rem;
    line-height: .22rem;
    width: .64rem;
    color: #333;
    background-color: #f5f5f5;
    border-radius: .04rem;
    font-size: .12rem;
    text-align: center;
}
.list-view-top .list-submenu li.on {
    color: #FFF;
    background-color: #FF4338;
}
/* 列表详情 */
.list-view {
    background: #fff;
    padding-top: .085rem;
    padding-left: .085rem;
    width: 100%;
    overflow-y: hidden;
}
.list-view ul>li>a {
    padding: .085rem;
    padding-left: 0;
    border-bottom: 1px solid #e6e6e6;
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: -moz-flex;
    display: flex;
}
.list-view ul>li>a .imgs {
    width: 30%;
    float: left;
    position: relative;
}
.list-view ul>li>a .imgs .get_imgs {
    width: 100%;
    display: block;
}
.list-view ul>li>a .imgs .get_imgs img {
    width: 100%;
}
.list-view ul>li>a .details_box {
    width: 66%;
    position: relative;
    margin-left: .085rem;
    height: .96rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.list-view ul>li>a .details_box h2 {
    font-size: .14rem Helvetica,sans-serif;;
    color: #333;
    font-weight: 400;
    max-height: .35rem;
    overflow: hidden;
    word-break: break-all;
    line-height: .175rem;
}
.list-view ul>li>a .details_box .subtitle {
    bottom: .04rem;
    left: 0;
    font-size: .12rem;
    color: #FF4338;
    line-height: .02rem;
}
.list-view ul>li>a .details_box .from {
    font-size: .11rem;
    color: #a4a4a4;
    width: 100%;
    bottom: .006rem;
    left: 0;
}
.list-view ul>li>a .details_box .from .column_name {
    float: left;
}
</style>