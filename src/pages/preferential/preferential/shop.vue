<template>
  <div class="bg-color-all">
    <!-- 第六部分  第一部分 -->
    <div class="advert-radius">
      <a href="http://www.shihuo.cn/column/130.html" class="advert">
        <img
          src="http://shihuo.hupucdn.com/appHome/201902/0323/6de7db22aecf585cf2544cafd24c2bf9.png"
          alt="每日荐"
        />
      </a>
    </div>
    <!-- 第六部分  第二部分 -->
    <div class="menu-list swiper-container-horizontal swiper-container-free-mode" id="menu-list">
      <ul class="swiper-wrapper clearfix" style="transform: translate3d(0px, 0px, 0px);">
        <li data-id="999" class="swiper-slide on swiper-slide-active">
          <a href="javascript:void(0);">精选</a>
        </li>
        <li data-id="1" class="swiper-slide swiper-slide-next">
          <a href="javascript:void(0);">鞋类</a>
        </li>
        <li data-id="2" class="swiper-slide">
          <a href="javascript:void(0);">服饰</a>
        </li>
        <li data-id="3" class="swiper-slide">
          <a href="javascript:void(0);">数码</a>
        </li>
        <li data-id="4" class="swiper-slide">
          <a href="javascript:void(0);">兴趣</a>
        </li>
        <li class="swiper-slide"></li>
      </ul>
      <div class="tag-btn"></div>
    </div>


    <router-view></router-view>
    <!-- 第六部分  第三部分 -->
    
  </div>
</template>

<script>
import {preferentialSelected} from "../../../api/shop";
import {preferentialFootwear} from "../../../api/shop";
import {preferentialTrappings} from "../../../api/shop";
import {preferentialDigital} from "../../../api/shop";
import {preferentialInterest} from "../../../api/shop";





export default {
  name:"Shop",
  async created() {
    let data=await preferentialSelected(30);
    console.log(data)
  },

    async created() {
    let data=await preferentialFootwear(30);
    console.log(data)
  },

   async created() {
    let data=await preferentialTrappings(30);
    console.log(data)
  },

     async created() {
    let data=await preferentialDigital(30);
    console.log(data)
  },

    async created() {
    let data=await preferentialInterest(30);
    console.log(data)
  },

  components: {},
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.youhuiIndex .bg-color-all {
  background-color: #fff;
  width: 100%;
  height: auto;
}

/* 第六部分  第一部分 */

.youhuiIndex .advert-radius {
  padding: 0 0.128rem;
  margin-bottom: 0.128rem;
}

.youhuiIndex .advert-radius .advert {
  display: flex;
  height: 0.64rem;
  width: 100%;
  display: block;
  overflow: hidden;
  border-radius: 0.32rem;
  color: #444;
  text-decoration: none;
}

.youhuiIndex .advert-radius .advert img {
  width: 100%;
  display: block;
}

/* 第六部分  第二部分 */

.youhuiIndex .menu-list {
  width: 100%;
  border-top: 0.005rem solid #f0f3f5;
  border-bottom: 0.005rem solid #f0f3f5;
  height: 0.375rem;
  overflow: hidden;
  position: relative;
  background-color: #fff;
  transform: translateZ(0);
}

.swiper-wrapper {
  transform: translate3d(0px, 0px, 0px);
  margin: 0 auto;
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
}

.youhuiIndex .menu-list li {
  width: 0.375rem;
  line-height: 0.375rem;
  height: 0.375rem;
  color: #333;
  padding-left: 0.128rem;
  padding-right: 0.128rem;
  text-align: center;
  background: #fff;
  width: auto;
  position: relative;
}

.youhuiIndex .menu-list li.on a {
  color: #ff4338;
  position: relative;
  border-bottom: 0.08rem solid #ff4338;
}

.youhuiIndex .menu-list li a {
  font-size: 0.13rem;
  color: #333;
  height: 0.375rem;
  line-height: 0.375rem;
  display: inline-block;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
}

.youhuiIndex .menu-list .tag-btn {
  width: 0.485rem;
  height: 100%;
  background: rgba(255, 255, 255, 0.8)
    url(http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/youhui/index/tag-hide_9647888.png)
    no-repeat;
  background-size: 100% auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 1;
}

/* 第六部分  第三部分 */


</style>
