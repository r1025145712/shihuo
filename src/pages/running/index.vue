<template>
  <div class="container">
    <Topbar title="跑步"></Topbar>
    <div class="content">
      <div class="menu-block">
        <ul>
          <li v-for="(item,index) in top " :key="index">
            <img :src="item.img" />
            <p>{{item.paragraph}}</p>
          </li>
        </ul>
        <ul>
          <li v-for="(item,index) in bottom " :key="index">
            <img :src="item.img" />
            <p>{{item.paragraph}}</p>
          </li>
        </ul>
      </div>
      <div class="hosttest">
        <div class="left"></div>
        <div class="right">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <a href>Zoom跑鞋大全</a>
                <a href>带你了解跑鞋类型</a>
              </div>
              <div class="swiper-slide">
                <a href>稳定型跑鞋推荐</a>
                <a href>亚瑟士的跑鞋世界</a>
              </div>
              <div class="swiper-slide">
                <a href>🤖智能帮您选鞋</a>
                <a href>膝盖损伤恢复秘笈</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="hot-active">
        <p>热门活动</p>
        <ul>
          <li>
            <img
              src="http://shihuo.hupucdn.com/appZone/201804/1310/87609edab6d859bb211b0243418109b5.jpg"
              alt
            />
            <p class="p1">装备微讯</p>
            <p class="p2">2分钟懂你想要</p>
          </li>
          <li>
            <img
              src="http://shihuo.hupucdn.com/appZone/201803/2617/e6ae975eca6480b86354e92fa866a8e1.jpg"
              alt
            />
            <p class="p1">跑步评测室</p>
            <p class="p2">最炫酷的跑步装备评测</p>
          </li>
          <li>
            <img
              src="http://shihuo.hupucdn.com/appZone/201804/1310/87609edab6d859bb211b0243418109b5.jpg"
              alt
            />
            <p class="p1">#什么跑鞋值得买#</p>
            <p class="p2">晒晒你最爱的跑鞋</p>
          </li>
        </ul>
      </div>
      <div class="wish">
        <p>
          <span>欲望清单</span>
          <span>查看更多</span>
        </p>
        <div class="swiper-container1">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item,index) in swiper" :key="index">
              <img :src="item.img" alt />
              <p>{{item.p}}</p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  data() {
    return {
      top: [
        {
          img: "http://sh1.hoopchina.com.cn/images/trade/app/paobuxie1.png",
          paragraph: "跑步鞋"
        },
        {
          img:
            "http://sh1.hoopchina.com.cn/images/trade/app/paobufuzhuang2.png",
          paragraph: "跑步上装"
        },
        {
          img: "http://sh1.hoopchina.com.cn/images/trade/app/paobuduanku1.png",
          paragraph: "跑步下装"
        },
        {
          img: "http://sh1.hoopchina.com.cn/images/trade/app/paobupeijian2.png",
          paragraph: "跑步配件"
        },
        {
          img:
            "http://sh1.hoopchina.com.cn/images/trade/app/paobuyingyang2.png",
          paragraph: "运动补给"
        }
      ],
      bottom: [
        {
          img: "http://sh1.hoopchina.com.cn/images/trade/app/adidas.png",
          paragraph: "adidas"
        },
        {
          img: "http://sh1.hoopchina.com.cn/images/trade/app/asics.png",
          paragraph: "asics"
        },
        {
          img: "http://sh1.hoopchina.com.cn/images/trade/app/NewBalance.png",
          paragraph: "New balance"
        },
        {
          img: "http://sh1.hoopchina.com.cn/images/trade/app/nike1.png",
          paragraph: "Nike"
        },
        {
          img: "http://sh1.hoopchina.com.cn/images/trade/app/morebrand.png",
          paragraph: "全部"
        }
      ],
      swiper: [
        {
          img:
            "http://shihuo.hupucdn.com/article/2018-05-31/4a742d935267d38d4924dcf3654c9aee.jpg?imageView2/0/w/300/h/300/interlace/1",
          p: "户外跑鞋选购"
        },
        {
          img:
            "http://shihuo.hupucdn.com/article/2018-12-13/2481e2a3d76b93bef576e7764ed41ea7.jpg?imageView2/0/w/300/h/300/interlace/1",
          p: "户外跑鞋选购"
        },
        {
          img:
            "http://shihuo.hupucdn.com/ucditor/20180126/400x400_35d6830055ab213520ac3f2dff03712e.jpeg?imageView2/0/w/300/h/300/interlace/1",
          p: "户外跑鞋选购"
        },
        {
          img:
            "http://shihuo.hupucdn.com/ucditor/20180112/400x400_d0fe905a61b5aea5eba7cfa2756ac0cb.jpeg?imageView2/0/w/300/h/300/interlace/1",
          p: "户外跑鞋选购"
        },
        {
          img:
            "http://shihuo.hupucdn.com/article/2018-03-19/08349f52e62ea3d1797a9f47b7b5c45b.jpg?imageView2/0/w/300/h/300/interlace/1",
          p: "户外跑鞋选购"
        },
        {
          img:
            "http://shihuo.hupucdn.com/ucditor/20171201/400x400_1df195d8687e04b72a52aee6134e9755.jpeg?imageMogr2/format/jpg",
          p: "户外跑鞋选购"
        },
        {
          img:
            "http://shihuo.hupucdn.com/article/2018-04-12/b09a987ae49d2fb6ac59930f2e427bdf.jpg?imageView2/0/w/300/h/300/interlace/1",
          p: "户外跑鞋选购"
        },
        {
          img:
            "http://shihuo.hupucdn.com/article/2018-04-12/8d9b7c713ddbb692b0cccab813bbab5a.jpg?imageView2/0/w/300/h/300/interlace/1",
          p: "户外跑鞋选购"
        },
        {
          img:
            "http://shihuo.hupucdn.com/article/2018-05-31/4a742d935267d38d4924dcf3654c9aee.jpg?imageView2/0/w/300/h/300/interlace/1",
          p: "户外跑鞋选购"
        }
      ]
    };
  },
  mounted() {
    this.$nextTick(() => {
      var mySwiper = new Swiper(".swiper-container", {
        direction: "vertical", // 垂直切换选项
        loop: true, // 循环模式选项
        autoplay: true
      });

      var mySwiper = new Swiper(".swiper-container1", {
        direction: "horizontal", // 垂直切换选项
        loop: false // 循环模式选项
      });
    });
  }
};
</script>


<style scoped>

html {
  font-size: 31.25vw;
}
body {
  font-size: 0.16rem;
}
* {
  margin: 0;
  padding: 0;
}
html,
body {
  width: 100%;
  height: 100%;
}
.container {
  width: 100%;
  height: 100%;
  overflow: hidden;

  overflow: scroll;
}
.content {
  padding-top: 0.4rem;
  width: 100%;
}

/* menu-block */
.menu-block {
  width: 100%;
  height: 1.4rem;
}
.menu-block ul {
  padding: 0.05rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.menu-block ul li {
  width: 20%;
  height: 0.6rem;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.menu-block ul li img {
  width: 0.616rem;
  height: 0.344rem;
}
.menu-block ul li p {
  font-size: 0.1rem;
}

/* hosttest */
.hosttest {
  width: 100%;
  height: 0.3rem;
  display: flex;
}

.hosttest .left {
  width: 30%;
  height: 0.3rem;
  margin-left: 0.1rem;
  background: url(http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/sports/index/hottest_32eac13.jpg)
    center no-repeat;
  background-size: 0.8rem 0.27rem;
}

.hosttest .right {
  width: 70%;
  height: 0.3rem;
  margin-right: 0.1rem;
}
.swiper-container {
  width: 100%;
  height: 0.3rem;
  line-height: 0.3rem;
}
.swiper-slide {
  width: 100%;
  line-height: 0.3rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.swiper-slide a {
  display: block;
  width: 50%;
  font-size: 0.1rem;
}

.hot-active {
  width: 100%;
  height: 1.5rem;
}
.hot-active > p {
  margin: 0.05rem;
  padding: 0.05rem;
  font-weight: bold;
}
.hot-active ul {
  width: 94%;
  height: 1.15rem;
  margin: 0 0.1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.hot-active ul li {
  width: 32.6%;
  height: 1.15rem;
}
/* hot-active */
.hot-active ul li img {
  width: 100%;
  /* height: 1.15rem;
  background: green; */
}

.hot-active ul li .p1 {
  font-size: 0.1rem;
  margin: 0.05rem;
}

.hot-active ul li .p2 {
  font-size: 0.05rem;
  margin: 0.05rem;
}

/* wish */

.wish {
  width: 100%;
  height: 1.6rem;
  overflow: hidden;
}
.wish > p {
  margin: 0.05rem;
  padding: 0.05rem;
  font-weight: bold;
}
.wish > p span:nth-child(2) {
  float: right;
}
.swiper-container1 {
  width: 1rem;
  height: 1.15rem;
}
.swiper-container1 .swiper-wrapper {
}
.swiper-container1 .swiper-wrapper div {
  margin-top: 0.07rem;
  margin-right: 0.07rem;
  width: 0.9rem;
  height: 1.15rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.swiper-container1 .swiper-wrapper div img {
  width: 100%;
}
</style>