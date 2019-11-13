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
      <div :class="searchBarFixed == true ? 'isFixed' :''">
        <ul class="swiper-wrapper clearfix">
          <router-link
            tag="li"
            :to="item.dizhi"
            v-for="(item,index) in arr"
            :key="index"
            :data-id="item.id"
            class="swiper-slide"
          >
            <a href="#">{{item.name}}</a>
          </router-link>
        </ul>

        <div class="tag-btn"></div>
      </div>
    </div>

    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "Shop",

  components: {},
  data() {
    return {
      searchBarFixed: false,
      arr: [
        {
          id: "999",
          dizhi: "/preferential/preferentialSelected",
          name: "精选"
        },
        {
          id: "1",
          dizhi: "/preferential/preferentialFootwear",
          name: "鞋类"
        },
        {
          id: "2",
          dizhi: "/preferential/preferentialTrappings",
          name: "服饰"
        },
        {
          id: "3",
          dizhi: "/preferential/preferentialDigital",
          name: "数码"
        },
        {
          id: "4",
          dizhi: "/preferential/preferentialInterest",
          name: "兴趣"
        }
      ]
    };
  },

  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    window.ontouchmove = this.handleScroll;
  },
  methods: {
    handleScroll() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop; //网页被卷起来的高度
      var offsetTop = document.querySelector("#menu-list").offsetTop; //距离顶部的高度
      console.log(scrollTop);
      console.log(offsetTop);
      if (scrollTop > offsetTop) {
        this.searchBarFixed = true;
      } else {
        this.searchBarFixed = false;
      }
      // console.log(this.searchBarFixed)
    }
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>

<style lang="scss">
   .isFixed {
     width: 100%;
    position: fixed;
    background-color: red;
    top: 0;
    z-index: 999;
    border-top: none;
  }
  .isFixed .swiper-wrapper {
  margin: 0 auto;
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  background: #333
}
</style>

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

.youhuiIndex .menu-list .router-link-exact-active a {
  color: #ff4338;
  position: relative;
  border-bottom: 0.04rem solid #ff4338;
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

.youhuiIndex .menu-list.fixedTop {
  position: fixed;
  z-index: 10;
  left: 0;
  top: 0;
}
/* 第六部分  第三部分 */
</style>
