<template>
  <div class="topBlock">
    <!-- 第四部分  第一部分 -->
    <x class="tabList" id="tagsList">
      <div class="swiper-wrapper">
        <router-link
          tag="div"
          :to="'/find/'+item.title+'/'+item.id"
          class="swiper-slide"
          :data-id="item.id"
          v-for="(item,index) in arr"
          :key="index"
        >
          <a href="javascript:void(0);" class="tags">{{item.title}}</a>
        </router-link>
      </div>
    </x>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
    name:"findsss",
  components: {},
  data() {
    return {
      arr: [
        {
          id: "283",
          title: "今日推荐"
        },
        {
          id: "347",
          title: "篮球"
        },
        {
          id: "281",
          title: "视频"
        },
        {
          id: "270",
          title: "最新资讯"
        },
        {
          id: "318",
          title: "潮流风向"
        },
        {
          id: "273",
          title: "3C新奇特"
        },
        {
          id: "285",
          title: "潮鞋志"
        },
        {
          id: "136",
          title: "球鞋90秒"
        }
      ]
    };
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
/* 第四部分 */

.page-content .topBlock {
  background: #fff;
  min-height: 7.5rem;
}

/* 第四部分  第一部分 */

.page-content .topBlock .tabList {
  width: 100%;
  overflow: hidden;
  transform: translateZ(0);
  height: 0.36rem;
}

.swiper-wrapper {
  width: 150%;
}

.page-content .topBlock .tabList .swiper-slide {
  text-align: center;
  background: #fff;
  width: auto;
  height: 0.35rem;
  border-bottom: 1px solid #e6e6e6;
}

.page-content .topBlock .tabList .swiper-slide {
  text-align: center;
  background: #fff;
  width: auto;
  height: 0.35rem;
  border-bottom: 1px solid #e6e6e6;
  position: relative;
}

.page-content .topBlock .tabList .swiper-slide a {
  font-size: 13px;
  color: #333;
  height: 0.35rem;
  line-height: 0.35rem;
  display: inline-block;
  margin: 0 0.085rem;
  font-size: 0.13rem;
}

.page-content .topBlock .tabList .router-link-exact-active a {
  color: #ff4338;
}

.page-content .topBlock .tabList .router-link-exact-active:after {
  content: "";
  position: absolute;
  width: 0.26rem;
  height: 0.0175rem;
  background: red;
  bottom: 0;
  left: 50%;
  margin-left: -0.128rem;
  border-radius: 0.005rem;
}


</style>
