<template>
  <div>
    <div class="page">
        <div class="search">
            <div class="search-box">
                <span class="iconfont iconxingtaiduICON_sousuo--"></span>
                <input type="text" placeholder="搜索全网低价好券">
            </div>
            <div class="user"><img src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/widget/header/head_list_4a4f511.png" alt=""></div>
        </div>

       
    </div>
  </div>
</template>

<script>
export default {
  name: "equip",
  created() {
    document.title = this.$route.meta.title;
  }
};
</script>

<style  scoped>
html {
  font-size: 31.25vw;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
body {
  widows: 100%;
  height: 100%;
  font-size: 0.12rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.page {
  width: 100%;
  height: 100%;
  overflow: scroll;
}

/* serch */
.search {
  height: 0.4rem;
  width: 100%;
  padding-bottom: 0.1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #eee;
  padding: 0 0.1rem;
}
.search .search-box {
  padding: 0 0.1rem;
  width: 2.7rem;
  height: 0.23rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f7f7f7;
}
.search .search-box > .iconfont {
  padding-left: 0.02rem;
  font-size: 0.25rem;
}
.search .search-box input {
  width: 2.43rem;
  outline: none;
  background: #f7f7f7;
  font-size: 0.04rem;
  border: none;
}
.search .user {
  width: 0.32rem;
  height: 0.36rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.search .user img {
  width: 0.32rem;
  height: 0.32rem;
}

/* text */
.text {
  width: 100%;
  height: 0.8rem;
}

.text li {
  width: 33%;
  height: 0.5rem;
  border-right: 1px solid #ccc;
  display: list-item;
  text-align: center;
  float: left;
  margin-top: 0.15rem;
  font-size: 0.18rem;
}
.text li:nth-child(3) {
  border: none;
}
.text li a:before {
  height: 0.3rem;
  width: 0.3rem;
  content: "";
  display: block;
  font-size: 0.18rem;

  margin: 0 auto 0.02rem;
}
.text li a {
  display: block;
  color: black;
}

.text li:nth-child(1) a:before {
  height: 0.3rem;
  width: 0.3rem;
  content: "";
  display: block;
  font-size: 0.18rem;
  background: url(http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/index/zhuangbei-index-menu-1_f79f337.png)
    no-repeat center center transparent;
  background-size: contain;
  margin: 0 auto 0.02rem;
}
.text li:nth-child(2) a:before {
  height: 0.2rem;
  width: 0.2rem;
  content: "";
  display: block;
  font-size: 0.18rem;
  background: url(http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/index/zhuangbei-index-menu-2_4b3ef21.png)
    no-repeat center center transparent;
  background-size: contain;
  margin: 0.05rem auto 0.07rem;
}
.text li:nth-child(3) a:before {
  height: 0.2rem;
  width: 0.2rem;
  content: "";
  display: block;
  font-size: 0.18rem;
  background: url(http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/index/zhuangbei-index-menu-3_680282c.png)
    no-repeat center center transparent;
  background-size: contain;
  margin: 0.05rem auto 0.07rem;
}
/* banner-area */

.banner-area {
  position: relative;
  height: 1.8rem;
  background: pink;
}
.banner-area .bg-img {
  height: 1.8rem;
}
.banner-area .bg-img img {
  width: 100%;
  height: 100%;
}
.banner-area .ban-text {
  position: absolute;
  left: -0.1rem;
  width: 100%;
  top: 0.3rem;
  text-align: center;
  color: #fff;
  font-size: 0.24rem;
}
.banner-area .ban-text .h2 img {
  position: absolute;
  top: 0.02rem;
  right: 0.5rem;
  width: 0.24rem;
  height: 0.24rem;
}

.banner-area .ban-text .txt {
  font-size: 0.12rem;
  margin-top: 0.1rem;
}
.banner-area .ban-text .txt p {
  padding-left: 0.5rem;
  margin-top: 0.06rem;
  width: 2.5rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.banner-area .ban-text .left img {
  position: absolute;
  left: 0.46rem;
  top: 0.12rem;
  height: 1.1rem;
}
.banner-area .ban-text .right img {
  position: absolute;
  right: 0.18rem;
  top: 0.12rem;
  height: 1.1rem;
}

/* 六边形背景图片 */
.banner-area .ban-text .list {
  position: absolute;
  width: 2.6rem;
  height: 0.7rem;
  left: 0.7rem;
  top: 0.8rem;
  overflow: hidden;
}

/*  */
.boxF {
  width: 0.5rem;
  height: 0.7rem;
  margin: auto;
  transform: rotate(120deg);
  overflow: hidden;
  float: left;
  padding-right: 0.05rem;
  margin-left: 0.03rem;
}
.boxS {
  width: 0.5rem;
  height: 0.7rem;
  transform: rotate(-60deg);
  margin: auto;
  overflow: hidden;
  position: absolute;
}
.boxD {
  width: 0.5rem;
  height: 0.7rem;
  transform: rotate(-60deg);
  background: #fff;
  margin: auto;

  background: url(http://shihuo.hupucdn.com/trade/goods/style/20170411/adecead744a0d0c0a81a4803c5c84a821491896490.jpg?imageView2/1/w/100/h/100)
    center center;
  background-size: 100%;

  overflow: hidden;
  position: absolute;

  /*     
    background: ;
      */
}

/* tag-area */

.tag-area {
  width: 100%;
  height: 0.9rem;
}
.tag-area .tag-list {
  width: 100%;
  height: 0.45rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
}
.tag-area .tag-list a {
  display: block;
  width: 25%;
  height: 0.45rem;
  color: black;
  text-align: center;
  line-height: 0.45rem;
  font-size: 0.16rem;
}
.tag-area .tag-list a:last-child {
  position: relative;
}
.tag-area .tag-list a:last-child img {
  position: absolute;
  width: 0.07rem;
  left: 0.64rem;
  top: 0.15rem;
}

/* 单行 */

.tag-areas {
  width: 100%;
  height: 0.45rem;
}
.tag-areas .tag-list {
  width: 100%;
  height: 0.45rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
}
.tag-areas .tag-list a {
  display: block;
  width: 25%;
  height: 0.45rem;
  color: black;
  text-align: center;
  line-height: 0.45rem;
  font-size: 0.16rem;
}
.tag-areas .tag-list a:last-child {
  position: relative;
}
.tag-areas .tag-list a:last-child img {
  position: absolute;
  width: 0.07rem;
  left: 0.64rem;
  top: 0.15rem;
}

/* .line */
.line {
  height: 0.1rem;
  width: 100%;
  background: #ccc;
  border: none;
}

/* tj-area */

.tj-area {
  /* padding-left: .1rem; */
}
/* .tj-area>p{
   padding-left: .05rem;
} */
.tj-area .clearfix {
  height: 1.4rem;
  padding: 0.05rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.01rem solid #ccc;
}
.tj-area .clearfix .imgs {
  width: 1.1rem;
  height: 1.1rem;
  margin-left: 0.1rem;
}
.tj-area .clearfix .imgs img {
  width: 1.1rem;
  height: 1.1rem;
}
.tj-area .clearfix .txt-area {
  position: relative;
  height: 1.1rem;
  width: 2rem;
  flex: 1;
}

.tj-area > .clearfix > .txt-area > div:first-child {
  font-size: 0.16rem;
  height: 0.4rem;
  overflow: hidden;
  padding-left: 0.1rem;
}

.tj-area > .clearfix > .txt-area > div:nth-child(2) {
  height: 0.4rem;
  font-size: 0.1rem;
  padding-left: 0.1rem;
}
.tj-area > .clearfix > .txt-area > div:nth-child(3) {
  width: 2rem;
  height: 0.3rem;
  line-height: 0.3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 0.1rem;
}
.tj-area > .clearfix > .txt-area > div:nth-child(3) .t1 s {
  text-decoration: none;
  font-weight: bold;
  color: chocolate;
}

.tj-area > .clearfix > .txt-area > div:nth-child(3) .t2 {
  padding-right: 0.1rem;
}
.tj-area > .clearfix > .txt-area > div:nth-child(3) .t2 span {
  display: inline-block;
}
.tj-area > .clearfix > .txt-area > div:nth-child(3) .t2 img {
  width: 0.1rem;
  display: inline-block;
}

/* footer */
footer {
  width: 100%;
  height: 0.4rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
footer div {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>