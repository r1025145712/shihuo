<template>


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
</template>

<script>
import Swiper from "swiper"
export default {
  name: "index-head",
  data(){
    return{
       
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
/* 轮播图 */
.swiper-container {
  width: 100%;
  height: 2.2rem;
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