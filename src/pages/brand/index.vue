<template>
  <div class="brandsale">
    <div class="menuTop">
      <ul class="swiper-wrapper clearfix">
        <router-link
          tag="li"
          v-for="(item,index) in tabs"
          :key="index"
          :to="'/brand/'+item.path+'/'+item.id"
          class="swiper-slide"
          data-id="0"
        >
          <a href="javascript:void(0);">
            <svg class="icon" aria-hidden="true">
              <use :xlink:href="item.img" />
            </svg>
            <span>{{item.title}}</span>
          </a>
        </router-link>
      </ul>
    </div>
    <!-- 主体 -->

    <div class="new">
     
        <!-- <keep-alive> -->
          <router-view></router-view>
        <!-- </keep-alive> -->
      
    </div>
  </div>
</template>

<script>
export default {
  name: "brand",
  data() {
    return {
      tabs: [
        {
          id: 0,
          path: "whole",
          title: "全部",
          img: "#icon-quanbu-copy"
        },
        {
          id: 1,
          path: "motion",
          title: "运动",
          img: "#icon-yundong"
        },
        {
          id: 2,
          path: "clothes",
          title: "男装",
          img: "#icon-nanzhuangleimu"
        },
        {
          id: 3,
          path: "digital",
          title: "数码",
          img: "#icon-shouji"
        },
        {
          id: 4,
          path: "other",
          title: "其他",
          img: "#icon-qita"
        }
      ]
    };
  },
};
</script>
<style scoped>
.brandsale {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.brandsale .menuTop {
  background-color: #fff;
  width: 100%;
  overflow: hidden;
  position: fixed;
  background-color: #fff;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  box-shadow: 0 0.02rem 0.2rem rgba(243, 3, 3, 0.1);
  top: 0;
  left: -1px;
  z-index: 11;
  height: 0.44rem;
}
.swiper-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-right: 0.5rem;
}
.swiper-wrapper li {
  width: 0.54rem;
  height: 100%;
}
.swiper-wrapper li a {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.swiper-wrapper li a span {
  margin-top: 0.02rem;
  font-size: 0.12rem;
}
.swiper-wrapper li a svg {
  font-size: 0.22rem;
}
.active svg,
.active span {
  color: red;
}
.swiper-slide-active svg,
.swiper-slide-active span {
  color: #fff;
}
/* 商品 */
.new {
  display: flex;
  margin-top: 0.54rem;
  margin-bottom: .34rem;
  height: 100%;
  overflow-y: auto;
  flex-direction: column;
}
/* .bscroll{
    height: 100%;
} */
</style>