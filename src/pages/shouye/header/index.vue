<template>
  <div class="headBox">
    <div class="search_bar">
      <form
        action
        id="searchBox"
        method="get"
        class="searchBox"
        style="background: rgba(221, 23, 18, 0);"
      >
        <div class="search_box">
          <div class="search">
            <input
              type="text"
              class="input"
              name="keywords"
              value
              placeholder="搜索商品，品牌"
              id="searchVal"
            />
            <input type="reset" class="sh_searchClear" title="重置搜索词" style="display: none;" />
          </div>
          <a :href="path" class="me">
            <img
              src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/homefis/widget/header/me_0442d1d.png"
              alt
            />
          </a>
        </div>
      </form>
    </div>

    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <a href>
            <img src="@img/swiper1.jpg" alt />
          </a>
        </div>
        <div class="swiper-slide">
          <a href>
            <img src="@img/swiper2.png" alt />
          </a>
        </div>
        <div class="swiper-slide">
          <a href>
            <img src="@img/swiper3.png" alt />
          </a>
        </div>
        <div class="swiper-slide">
          <a href>
            <img src="@img/swiper4.png" alt />
          </a>
        </div>
        <div class="swiper-slide">
          <a href>
            <img src="@img/swiper5.jpg" alt />
          </a>
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper"
export default {
  name: "index-head",
  data(){
    return{
         path: "#/more"
    }
  },
  mounted(){
    var swiper = new Swiper('.swiper-container',{
       direction: 'horizontal', // 垂直切换选项
        loop: true, // 循环模式选项
        autoplay:true,

        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination',
        },
    })
     //如果你在swiper初始化后才决定使用clickable，可以这样设置
    swiper.params.pagination.clickable = true;
    //此外还需要重新初始化pagination
    swiper.pagination.destroy()
    swiper.pagination.init()
    swiper.pagination.bullets.eq(0).addClass('swiper-pagination-bullet-active');  
  }
};
</script>

<style >
.headBox {
  position: relative;
}
.search_bar {
  width: 100%;
  height: 0.39rem;
  overflow: hidden;
  position: absolute;
  top: 0;
  z-index: 10;
  border: 0;
}

.search_bar .searchBox {
  width: 100%;
  overflow: hidden;
  height: 0.39rem;
}

.search_bar .searchBox .search_box {
  width: 100%;
  overflow: hidden;
  height: 100%;
}

.search_bar .searchBox .search_box .search {
  width: 85%;
  float: left;
  padding-left: 0.085rem;
  position: relative;
  box-sizing: border-box;
}

.search_bar .searchBox .search_box .search .input {
  width: 100%;
  box-sizing: border-box;
  border-radius: 0.025rem;
  height: 0.26rem;
  margin: 0.06rem 0;
  border: 0;
  padding-left: 0.18rem;
  color: #666;
  border: 1px solid #ccc;
  font-size: 0.08rem;
  background: #fff
    url("http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/homefis/widget/header/search_0b8e800.png")
    0.06rem center no-repeat;
  background-size: 0.1rem;
  overflow: hidden;
}

.search_bar .searchBox .search_box .me {
  display: flex;
  float: right;
  width: 15%;
  height: 0.39rem;
  justify-content: center;
  align-items: center;
}

.search_bar .searchBox .search_box .me img {
  width: 0.25rem;
  height: 0.25rem;
}

/* 轮播图 */
.swiper-container {
  width: 100%;
  height: 1.6rem;
}
.swiper-container img {
  width: 100%;
  height: 100%;
}
.swiper-container-horizontal>.swiper-pagination-bullets {
  position: absolute;
  /* width: 1.2rem; */
  right:.0 !important;
  bottom: .05rem;
}
.swiper-pagination-bullet-active{
  background: #fff;
}
</style>