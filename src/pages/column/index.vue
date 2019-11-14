<template>
  <div class="box">
        
       <div class="mainBox">
         
        <div class="top_bar">
            <div class="goback">
                <a href="#/shouye">
                <img src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/common/widget/header/head_back_b142dc1.png">
                </a>
            </div>
            <span class="d-title">识货-栏目</span>
            <div class="ico_list">
                <img
                    src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/common/widget/header/head_list_4a4f511.png">
            </div>
            <div class="header_nav" id="header_nav">
                <div class="inner">
                    <ul>
                        <li>
                            <a href="" class="icons index">
                                <img
                                    src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/common/widget/header/homepage-icon_605ed60.png">首页</a>
                        </li>
                        <li>
                            <a href="" class="icons me">
                                <img
                                    src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/common/widget/header/user-center-icon_77dfd45.png">我的</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
            <RScroll>
        <div class="pagecontent">
            <div class="banner">
                <img get="true"
                    data-original="http://shihuo.hupucdn.com/column/201901/2911/b1a7a07263f622df41f93a2b84c0ad1a.png"
                    class="lazy"
                    src="http://shihuo.hupucdn.com/column/201901/2911/b1a7a07263f622df41f93a2b84c0ad1a.png">
            </div>
            <h3 class="title">
                <span>跑步评测室</span>
            </h3>
            <ul class="news-list" v-for="(item,index) in columnList" :key="index">
                <li>
                    <a href="" class="link-a">
                        <div class="imgs">
                            <img get="true" class="lazy" :data-src="item.data.img_long"
                                :src="item.data.img_path | toImg('400.400')">
                        </div>
                        <div class="details_box">
                            <h2>
                              {{item.data.title}}
                            </h2>
                            <p class="intro">{{item.data.subtitle}}</p>
                            <div class="from">
                                <div class="user-img">
                                    <img :src="item.data.avatar">
                                   {{item.data.author_name}}
                                </div>
                                <div class="guanzhu">
                                    {{item.data.praise}}
                                </div>
                            </div>
                        </div>
                    </a>
                </li>
                
            </ul>
        </div>
          </RScroll>
    </div>
   
  </div>
</template>
<script>
import { columnApi } from "@api/shop";
export default {
  name: "column",
  data() {
    return {
          columnList: [],
    };
  },
  created(){
   document.title=this.$route.meta.title;
     this.hanleColumnList();
  },
  methods: {
    async hanleColumnList() {
      let data = await columnApi();
      this.columnList = data.data;
    //    console.log(this.columnList)
    }
  }
};
</script>
<style >
.box{
     display: flex;
     height: 100%;
}
.mainBox{
    display: flex;
    flex-direction:column ;
}
.top_bar {
    background-color: #f7f7f7;
    height: .48rem;
    width: 100%;
    position: fixed;
    top: 0;
    text-align: center;
    z-index: 90;
    border-bottom: 1px solid #e6e6e6;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.top_bar .goback{
    width: .48rem;
    height: .48rem;
    display: flex;
    justify-content: center;
    align-items: center;
}
.top_bar .goback img{
    width: 100%;
}
.top_bar .d-title {
    color: #333;
    font-size: .2rem;
    display: inline-block;
    overflow: hidden;
    width: 1.6rem;
    height: .30rem;
    font-weight:900;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.top_bar .ico_list {
    width: .48rem;
    height: .48rem;
    display: flex;
    justify-content: center;
    align-items: center;
}
.top_bar .ico_list  img{
    width: .4rem;
    height: .4rem;
}
.header_nav {
    position: absolute;
    width: 36%;
    height: .9rem;
    right: .1rem;
    top: .48rem;
    background: rgba(0,0,0,.7);
    border-radius: 0.04rem;
    z-index: 99;
    display: none;
}
.header_nav:before {
    content: "";
    position: absolute;
    right: .08rem;
    top: -.05rem;
    border-bottom: .05rem solid rgba(0,0,0,.7);
    border-left: .06rem solid transparent;
    border-right: .06rem solid transparent;
}
.header_nav li:first-child {
    border-bottom: 1px solid #5c5c5c;
}
.header_nav a {
    color: #FFF;
    line-height: .45rem;
    text-align: center;
    font-size: .14rem;
    display: flex;
    align-items: center;
    justify-content: center;
}
.header_nav a  img{
    display: inline-block;
    width: .20rem;
    height: .20rem;
    margin: -.05rem .05rem 0 0;
}
/* 内容 */
.pagecontent{
    padding-top:.48rem ;
    overflow-y:auto; 
    display: flex;
    flex-direction: column;
    background-color: #FFF;
}
.pagecontent .banner{
    width: 100%;
    height: 1.36rem;
}
.pagecontent .banner img{
    width: 100%;
}
.pagecontent .title {
    text-align: center;
    font-size: .14rem;
    margin: .20rem .10rem;
    position: relative;
    color: #444;
    font-weight: bold;
}
.pagecontent .title:before {
    content: "";
    width: 100%;
    height: 1px;
    background-color: #e6e6e6;
    position: absolute;
    top: 50%;
    left: 0;
    z-index: 1;
}
.pagecontent .title span {
    display: inline-block;
    padding: 0 .15rem;
    background-color: #FFF;
    z-index: 10;
    position: relative;
}
.news-list{
    width: 100%;
}
.news-list a{
    display: flex;
    height: 1.34rem;
    padding: .10rem 0;
    margin:0 .10rem;
    border-bottom: 1px solid #e6e6e6;
   justify-content: space-around;
}
.news-list .imgs {
    width: 1.08rem;
    height: 1.08rem;
    min-height: 1.1rem;
    text-align: center;
    overflow: hidden;
    position: relative;
}
.news-list .imgs img {
    max-width: 100%;
    max-height: 100%;
}
.news-list .details_box {
    margin-left: .10rem;
    min-height: .90rem;
}
.news-list .details_box h2 {
    font-weight: 400;
    font-size: .15rem;
    line-height: .24rem;
    max-height: .48rem;
    color: #333;
    overflow: hidden;
}
.news-list .details_box .intro {
    font-size: .12rem;
    line-height: .16rem;
    height: .32rem;
    overflow: hidden;
    color: #666;
    font-weight: 400;
}
.news-list  .details_box .from {
    font-size: .15rem;
    width: 100%;
    line-height: .3rem;
    height: .3rem;
    color: #999;
  position: relative;
}
.details_box .from .user-img {
    height: 100%;
}
.details_box .from .user-img img {
    height: 100%;
    border-radius: 50%;
    display: inline-block;
    vertical-align: top;
}
.details_box .from .guanzhu {
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    text-align: right;
    height: 100%;
}
.details_box .from .guanzhu:before {
    content: "";
    display: inline-block;
    vertical-align: top;
    margin-right: .03rem;
    background: url(http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/column/vote_icon_8caec38.png) no-repeat center left transparent;
    width: 10%;
    max-width: .15rem;
    height: 100%;
    -webkit-background-size: contain;
    background-size: contain;
}
.bscroll{
    height: 100%;
}
</style>