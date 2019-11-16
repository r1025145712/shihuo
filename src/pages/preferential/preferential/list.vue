<template>
  <div class="shihuo1111-temai">
    <div class="tit-block">
      <b>{{tit}}</b>
      <div class="fr">
        <a :href="http">
          {{tite}}
          <img
            :src="img"
            alt
          />
        </a>
      </div>
    </div>
    <ul class="entrance-list">
      <li class="entrance-item" v-for="(item,index) in add" :key="index">
        <a :href="item.https">
          <img
            class="item-img"
            :src="item.imgs"
            alt
          />
          <div class="item-tit">{{item.title}}</div>
        </a>
      </li>
    </ul>

    <ul class="brand-list clearfix">
      <li class="brand-item" v-for="(item,index) in adds" :key="index">
        <a :href=item.http>
          <img
            :src=item.img
            alt
            class="brand-bg"
          />
          <img
            :src=item.imgs
            alt
            class="brand-logo"
          />
          <div class="brand-tit">{{item.tit}}</div>
          <div class="brand-subtit">{{item.tits}}</div>
        </a>
      </li>
    </ul>

  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      tit:"品牌特卖",
      tite:"更多品牌",
      img:"http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/youhui/index/more_6ed9489.png",
      http:"#/brand/whole/0",
      add:[
        {
          https:"#/brand/motion/1",
          imgs:"http://shihuo.hupucdn.com/appHome/201711/0113/705803887a16991348788bc77ef96298.png",
          title:"运动"
        },
        {
          https:"#/brand/clothes/2",
          imgs:"http://shihuo.hupucdn.com/appHome/201711/0113/ed229a3887b997986de9d2fa99968f2c.png",
          title:"休闲"
        },
        {
          https:"#/brand/whole/0",
          imgs:"http://shihuo.hupucdn.com/appHome/201711/0113/3be9bb6590b50ae4c2c823353ebd1bb9.png",
          title:"户外"
        },
        {
          https:"#/brand/digital/3",
          imgs:"http://shihuo.hupucdn.com/appHome/201711/0113/26a9c61773702db21dbe4b9d9a5bed60.png",
          title:"数码"
        },
                {
          https:"#/brand/other/4",
          imgs:"http://shihuo.hupucdn.com/appHome/201711/0113/487a7ff8df880418d15d3db5e4608a0f.png",
          title:"更多"
        },

      ],
      adds:[
        {
          http:"#/brand/whole/0",
          img:"http://shihuo.hupucdn.com/appHome/201801/0811/8b50d3b1734f11c83f911a361c96d1b9.jpg",
          imgs:"http://shihuo.hupucdn.com/goods/style/201708/1716/a8418a3ae650e7c5c76eea45f2a2bcc1.png",
          tit:"日高",
          tits:"定金50抵450"
        },
        {
          http:"#/brand/whole/0",
          img:"http://shihuo.hupucdn.com/appHome/201801/0612/71cd68692b56ab4bd992716e2c010270.jpg",
          imgs:"http://shihuo.hupucdn.com/goods/style/201708/1716/4ef177124aa7ba5eb5d6ef5c135ae057.png",
          tit:"匹克",
          tits:"不止5折"
        },
        {
          http:"#/brand/whole/0",
          img:"http://shihuo.hupucdn.com/appHome/201801/0612/ecbb92938c6c2e81bf6d4825f82b5fd9.jpg",
          imgs:"http://shihuo.hupucdn.com/newslogo/201710/1814/cd232408542a3bafc7eb464f74909171.jpg",
          tit:"dickies",
          tits:"满11减10元"
        },
        {
          http:"#/brand/whole/0",
          img:"http://shihuo.hupucdn.com/appHome/201801/0811/8f97c03a7fd2604d27568b087b8b5b59.jpg",
          imgs:"http://shihuo.hupucdn.com/goods/style/201708/1716/6c79a6f7612a56c851451ca0f0929025.png",
          tit:"铭瑄",
          tits:"虎扑专享满600减180"
        },
        {
          http:"#/brand/whole/0",
          img:"http://shihuo.hupucdn.com/appHome/201801/0811/985b1e7d8fc8eddc2a80c2b8b309ac2d.jpg",
          imgs:"http://shihuo.hupucdn.com/goods/style/201708/1716/bf41e50f5ace374682d8f9e104a9a953.png",
          tit:"UA",
          tits:"虎扑专享满600减180"
        },
        {
          http:"#/brand/whole/0",
          img:"http://shihuo.hupucdn.com/appHome/201801/0612/6751d06bc35a2e370f97982491bde549.jpg",
          imgs:"http://shihuo.hupucdn.com/newslogo/201710/2312/e08733467eb951d4ff57debfbf97396e.jpg",
          tit:"Sony索尼",
          tits:"满48减10"
        },
      ],

    };
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.shihuo1111-temai {
  background-color: #fff;
  padding: 0.128rem;
  height: 3.226 rem;
}

/* 第三部分 第一部分 */

.tit-block {
  font-size: 0.12rem;
  height: 0.21rem;
  line-height: 0.21rem;
}

.shihuo1111-temai .tit-block b {
  color: #333;
  font-size: 0.14rem;
  vertical-align: middle;
  font-weight: bold;
}

.shihuo1111-temai .tit-block .fr {
  vertical-align: middle;
  float: right;
}

.shihuo1111-temai .tit-block .fr a {
  color: #999;
  font-size: 0.12rem;
  padding-left: 0.064rem;
  vertical-align: middle;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 0.19rem;
}

.shihuo1111-temai .tit-block .fr img {
  margin-left: 0.05rem;
  width: 0.0475rem;
  height: 0.12rem;
  vertical-align: middle;
}

/* 第三部分  第二部分 */

.shihuo1111-temai .entrance-list {
  margin-top: 0.105rem;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
}

.shihuo1111-temai .entrance-list .entrance-item {
  width: 0.42rem;
  height: 0.59rem;
}

.shihuo1111-temai .entrance-list .entrance-item .item-img {
  width: 0.404rem;
  height: 0.404rem;
  border-radius: 0.404rem;
  border: 0.004rem solid #eee;
  display: block;
}

.shihuo1111-temai .entrance-list .entrance-item .item-tit {
  text-align: center;
  font-size: 0.13rem;
  color: #333;
  line-height: .19rem;
}

/* 第三部分  第三部分 */

.shihuo1111-temai .brand-list {
  margin-top: 0.064rem;
  height: 2.005rem;
}

.clearfix:before{
    display: table;
    content: "";
    line-height: 0;
}

.clearfix:after {
    display: table;
    content: "";
    line-height: 0;
    clear: both;
}

.shihuo1111-temai .brand-list .brand-item {
  overflow: hidden;
  position: relative;
  float: left;
  width: 0.93859rem;
  height: 0.93859rem;
  margin-right: 0.064rem;
  margin-top: 0.064rem;
}

.shihuo1111-temai .brand-list .brand-item:nth-of-type(3n) {
    margin-right: 0;
}

.shihuo1111-temai .brand-list .brand-item .brand-bg {
  top: 0;
  left: 50%;
  margin-left: -0.465rem;
  max-height: 100%;
  position: absolute;
  // width: 100%;
  // height: 100%
}

.shihuo1111-temai .brand-list .brand-item .brand-logo {
  display: block;
  width: 0.3rem;
  height: 0.3rem;
  border-radius: 0.15rem;
  left: 50%;
  margin-left: -0.15rem;
  top: 0.1875rem;
  position: absolute;
}

.shihuo1111-temai .brand-list .brand-item .brand-tit {
  height: 0.1275rem;
  line-height: 0.1275rem;
  font-size: 0.14rem;
  color: #fff;
  width: 0.8525rem;
  text-align: center;
  display: -webkit-box !important;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  top: 0.555rem;
  left: 50%;
  margin-left: -0.425rem;
  position: absolute;
}

.shihuo1111-temai .brand-list .brand-item .brand-subtit {
  position: absolute;
  width: 0.725rem;
  top: 0.725rem;
  left: 50%;
  margin-left: -0.3625rem;
  background-color: #ff4338;
  line-height: 0.1275rem;
  color: #fff;
  text-align: center;
  font-size: 0.11rem;
  height: 0.1275rem;
  border-radius: 0.06375rem;
  display: -webkit-box !important;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
}

</style>
