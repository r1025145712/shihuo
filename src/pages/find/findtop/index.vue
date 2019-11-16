<template>
  <div class="swiper-container swiper-container-horizontal" id="focus">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(item,index) in arr" :key="index">
        <a href>
          <img :src="item.img" alt />
        </a>
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import Swiper from "swiper";

export default {
  name: "findtop",
  components: {},
  data() {
    return {
      arr: [
        {
          img:
            "http://shihuo.hupucdn.com/appHome/201812/1300/0767ee290a165c7c519696b8c047436c.jpg?imageView2/2/w/750/h/268/interlace/1"
        },
        {
          img:
            "http://shihuo.hupucdn.com/appHome/201812/0920/b42ed3c3eca82633072c47a1bf3b53a9.jpg?imageView2/2/w/750/h/268/interlace/1"
        },
        {
          img:
            "http://shihuo.hupucdn.com/appHome/201811/1200/843bce9c5e893f33ccb55e1e7acd61fd.jpg?imageView2/2/w/750/h/268/interlace/1"
        },
        {
          img:
            "http://shihuo.hupucdn.com/appHome/201812/1023/736a64832b272c088c9fe01837b0ac4e.jpg?imageView2/2/w/750/h/268/interlace/1"
        },
        {
          img:
            "http://shihuo.hupucdn.com/appHome/201812/0900/d31d0002502c7181c272e5bac796375e.jpg?imageView2/2/w/750/h/268/interlace/1"
        }
      ]
    };
  },
  methods: {},
  mounted() {
    var swiper = new Swiper(".swiper-container", {
      direction: "horizontal", // 垂直切换选项
      loop: true, // 循环模式选项
      autoplay: true,

      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination"
      }
    });
    //如果你在swiper初始化后才决定使用clickable，可以这样设置
    swiper.params.pagination.clickable = true;
    //此外还需要重新初始化pagination
    swiper.pagination.destroy();
    swiper.pagination.init();
    swiper.pagination.bullets.eq(0).addClass("swiper-pagination-bullet-active");
  }
};
</script>

<style lang="scss" scoped>
.page-content .swiper-container {
  width: 100%;
  overflow: hidden;
  height: 1.15rem;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  z-index: 1;
}

.page-content .swiper-container img {
  width: 3.2rem;
  height: 1.15rem;
}

.swiper-container-horizontal > .swiper-pagination-bullets {
  position: absolute;
  right: 0;
  bottom: 0.05rem;
}
.swiper-pagination-bullet-active {
  background: #fff;
}
</style>
