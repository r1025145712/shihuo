<template>
  <div class="hotBlock">
    <div class="title">热门话题</div>
    <X class="slide-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in arr" :key="index">
          <a href>
            <div class="imgs">
              <img
                :src=item.img
                alt
                class="lazy"
                :data-original=item.img
              />
            </div>
            <div class="blackbg">
              <p>{{item.p}}</p>
            </div>
          </a>
        </div>
        <div data-href="http://m.shihuo.cn/column/columnHome?key=activity_list" class="look-more">
          <p>查看更多</p>
        </div>
      </div>
    </X>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  name: "findhot",
  components: {},
  data() {
    return {
      arr:[
        {
          img:"http://shihuo.hupucdn.com/column/201811/2215/2e79d7e6da19d652db2c54020574701e.jpg",
          p:"# 晒穿搭，AJ11 CONCORD 领回家！！ #"
        },
        {
          img:"http://shihuo.hupucdn.com/appHome/201811/1020/95e951e28bf1a30b58c03204e11e16a6.jpg",
          p:"# 限时下单 全场返利 #"
        },
        {
          img:"http://shihuo.hupucdn.com/column/201812/2919/08a6f969e4e07d33209b8ba948ed425c.png",
          p:"# 晒照赢新年康扣 #"
        },
      ]
    };
  },

};
</script>

<style lang="scss" scoped>
.page-content .hotBlock {
  width: 100%;
  overflow: hidden;
  height: 1.04rem;
  background: #fff;
  padding-bottom: 0.064rem;
  margin-bottom: 0.032rem;
  border-bottom: 0.005rem #ececec solid;
}

.page-content .hotBlock .title {
  height: 0.38rem;
  padding: 0.0425rem;
  text-align: left;
  font-size: 0.07rem;
  color: #222;
}

.page-content .hotBlock .slide-container {
  width: 100%;
  // padding: 0 0.0425rem;
  height: 0.53rem;
  overflow: hidden;
  // overflow-x:auto;
}

.swiper-wrapper {
  width: 3.45rem;
  height: 0.53rem;
  position: relative;
  z-index: 1;
  display: flex;
}

.page-content .hotBlock .slide-container .swiper-slide {
  text-align: center;
  height: 100%;
}

.swiper-slide {
  width: 1.05rem;
  position: relative;
  flex-shrink: 0;
  padding-right: 0.025rem;
  margin-left: 0.02rem;
}

.page-content .hotBlock .slide-container .swiper-slide a {
  display: block;
  position: relative;
  height: 100%;
}

.page-content .hotBlock .slide-container .swiper-slide img {
  width: 100%;
  display: block;
}

.page-content .hotBlock .slide-container .swiper-slide .imgs {
  width: 100%;
  overflow: hidden;
  position: relative;
}

.page-content .hotBlock .slide-container .swiper-slide .blackbg {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.2);
}

.page-content .hotBlock .slide-container .swiper-slide p {
  width: 100%;
  font-size: 0.06rem;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  z-index: 10;
  color: #fff;
  word-wrap: break-word;
  padding: 0.0425rem;
}

.look-more {
  height: 100%;
  width: 0.3rem;
  font-size: 0.12rem;
  display: flex;
  align-items: center;
}
</style>
