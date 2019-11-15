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

    <div
      @click="click"
      class="menu-list swiper-container-horizontal swiper-container-free-mode"
      id="menu-list"
      v-cloak
      v-clickoutside="outsideClose"
    >
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

        <div class="tag-btn" @click="show = !show"></div>
      </div>
    </div>

    <div class="menu-list-layer" id="menu-list-alertbox" v-show="show">
      <div class="tags-btn">
        切换分类
        <a class="hide-layer" @click="show = !show"></a>
      </div>
      <ul class="clearfix" id="menu-list-layer">
        <router-link
          tag="li"
          :to="item.dizhi"
          v-for="(item,index) in arr"
          :key="index"
          :data-id="item.id"
          class="lili"
        >{{item.name}}</router-link>
      </ul>
      <div class="hotsearch">
        <span>热门搜索</span>
      </div>
      <ul class="clearfix">
        <li v-for="(item,index) in ad" :key="index">
          <a :href="item.href">{{item.name}}</a>
        </li>
      </ul>
      <br />
    </div>
    <div class="layerBox-bg" v-show="show"></div>
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
      show: false,
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
      ],
      ad: [
        {
          href: "http:/search/searchResult/all?keywords=AJ#qk=rs",
          name: "AJ"
        },
        {
          href: "http:/search/searchResult/all?keywords=NIKE#qk=rs",
          name: "NIKE"
        },
        {
          href:
            "http:/search/searchResult/all?keywords=%E4%BA%9A%E7%91%9F%E5%A3%AB#qk=rs",
          name: "亚瑟士"
        },
        {
          href:
            "http:/search/searchResult/all?keywords=%E6%B4%97%E9%9D%A2%E5%A5%B6#qk=rs",
          name: "洗面奶"
        },
        {
          href: "http:/search/searchResult/all?keywords=Dickies#qk=rs",
          name: "Dickies"
        },
        {
          href:
            "http:/search/searchResult/all?keywords=%E6%9D%8E%E7%BB%B4%E6%96%AF#qk=rs",
          name: "李维斯"
        },
        {
          href:
            "http:/search/searchResult/all?keywords=%E6%96%B0%E7%99%BE%E4%BC%A6#qk=rs",
          name: "新百伦"
        },
        {
          href: "http:/search/searchResult/all?keywords=PUMA#qk=rs",
          name: "PUMA"
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
      // console.log(scrollTop);
      // console.log(offsetTop);
      if (scrollTop > offsetTop) {
        this.searchBarFixed = true;
      } else {
        this.searchBarFixed = false;
      }
      // console.log(this.searchBarFixed)
    },
    click() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop; //网页被卷起来的高度
      var offsetTop = document.querySelector("#menu-list").offsetTop; //距离顶部的高度

      if (scrollTop < offsetTop) {
        document.documentElement.scrollTop = document.querySelector(
          "#menu-list"
        ).scrollTop = offsetTop;
      }
    },
    outsideClose() {
      this.show = false;
    }
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  directives: {
    clickoutside: {
      bind(el, binding, vnode) {
        function documentHandler(e) {
          if (el.contains(e.target)) {
            return false;
          }
          if (binding.expression) {
            binding.value(e);
          }
        }

        function KeyUp(e) {
          if (e.keyCode == 27) {
            if (binding.expression) {
              binding.value(e);
            }
          }
        }
        el.__vueClickOutSize__ = documentHandler;
        el.__vueKeyup__ = KeyUp;

        document.addEventListener("keyup", KeyUp);
        document.addEventListener("click", documentHandler);
      },
      unbind(el, binding) {
        document.removeEventListener("click", el.__vueClickOutSize__);
        delete el.__vueClickOutSize__;

        document.removeEventListener("keyup", el.__vueKeyup__);
        delete el.__vueKeyup__;
      }
    }
  }
};
</script>

<style lang="scss">
.menu-list {
  .isFixed {
    width: 100%;
    position: fixed;
    background-color: #fff;
    top: 0;
    z-index: 999;
    border-top: none;
  }
}
// 
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
}

.swiper-wrapper {
  // transform: translate3d(0px, 0px, 0px);
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

.youhuiIndex .menu-list-layer .router-link-exact-active {
  color: #ff4338;
}

.youhuiIndex .menu-list-layer {
  position: fixed;
  top: 0;
  left: 0;
  background-color: #fff;
  z-index: 999;
  width: 100%;
}

.youhuiIndex .menu-list-layer .tags-btn {
  width: 100%;
  border-top: 0.005rem solid #f0f3f5;
  border-bottom: 0.005rem solid #f0f3f5;
  height: 0.375rem;
  line-height: 0.375rem;
  padding-left: 0.2rem;
  color: #333;
  font-size: 0.14rem;
  overflow: hidden;
  position: relative;
}

.youhuiIndex .menu-list-layer .tags-btn a {
  background: url(http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/youhui/index/tag-show_1dbdeb5.png)
    no-repeat;
  background-size: 100% auto;
  position: absolute;
  right: 0;
  top: 0;
  width: 0.49rem;
  height: 100%;
}

.youhuiIndex .menu-list-layer ul {
  width: 100%;
  height: 0.75rem;
}

.youhuiIndex .menu-list-layer li {
  float: left;
  line-height: 0.375rem;
  height: 0.375rem;
  overflow: hidden;
  color: #333;
  width: 25%;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 0.14rem;
}

.youhuiIndex .menu-list-layer .hotsearch {
  text-align: center;
  color: #999;
  font-size: 0.14rem;
}

.youhuiIndex .layerBox-bg {
  position: fixed;
  // top: 5.88rem;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  z-index: 87;
}
</style>
