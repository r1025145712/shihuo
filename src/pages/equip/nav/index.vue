<template>
  <div>
    <div class="banner-area">
      <div class="bg-img">
        <img
          src="http://shihuo.hupucdn.com/appZones/201701/1815/18dad2cc843300a3560cca54886957e5.png?imageView2/0/w/400/h/208/interlace/1"
          alt
        />
      </div>
      <div class="ban-text">
        <div class="h2">
          <span>篮球</span>BASKETBALL
          <img
            src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/index/ban-go_f747d60.png"
            alt
          />
        </div>
        <div class="txt">
          <p></p>
          <p>双十一买什么</p>
        </div>
        <div class="left">
          <img
            src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/index/ban-1_2b1686e.png"
            alt
          />
        </div>
        <div class="right">
          <img
            src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/index/ban-2_9a175b7.png"
            alt
          />
        </div>
      </div>
    </div>

    <div class="tag-area">
      <div class="tag-list">
        <a href v-for="(item,index) in tag[0].taglistone" :key="index">{{item}}</a>
        <img
          src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/index/icon-3_b996a60.png"
          alt
        />
      </div>
      <div class="tag-list">
        <a href v-for="(item,index) in tag[0].taglisttwo" :key="index">{{item}}</a>
        <img
          src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/index/icon-3_b996a60.png"
          alt
        />
      </div>
    </div>

    <div class="banner-area">
      <div class="bg-img">
        <img
          src="http://shihuo.hupucdn.com/appZones/201701/1815/fa1b657f6d267f5ccb6c3213ba7cebd3.png?imageView2/0/w/400/h/208/interlace/1"
          alt
        />
      </div>
      <div class="ban-text">
        <div class="h2">
          <span>跑步</span>RUNNING
          <img
            src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/index/ban-go_f747d60.png"
            alt
          />
        </div>
        <div class="txt">
          <p></p>
          <p>户外跑鞋选购</p>
        </div>
        <div class="left">
          <img
            src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/index/ban-1_2b1686e.png"
            alt
          />
        </div>
        <div class="right">
          <img
            src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/index/ban-2_9a175b7.png"
            alt
          />
        </div>
      </div>
    </div>

    <div class="tag-area">
      <div class="tag-list">
        <a href v-for="(item,index) in tag[1].taglistone" :key="index">{{item}}</a>
        <img
          src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/index/icon-3_b996a60.png"
          alt
        />
      </div>
      <div class="tag-list">
        <a href v-for="(item,index) in tag[1].taglisttwo" :key="index">{{item}}</a>
        <img
          src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/index/icon-3_b996a60.png"
          alt
        />
      </div>
    </div>

    <div class="banner-area">
      <div class="bg-img">
        <img
          src="http://shihuo.hupucdn.com/appZones/201701/1815/d5bdeb4f9dee46e6cf24e239da707bc3.png?imageView2/0/w/400/h/208/interlace/1"
          alt
        />
      </div>
      <div class="ban-text">
        <div class="h2">
          <span>潮流</span>CASUAL
          <img
            src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/index/ban-go_f747d60.png"
            alt
          />
        </div>
        <div class="txt">
          <p>等8款超低价</p>
          <p>年度鞋款回顾</p>
        </div>

        <div class="list">
          <div class="boxF">
            <div class="boxS">
              <div class="boxD"></div>
            </div>
          </div>
          <div class="boxF">
            <div class="boxS">
              <div class="boxD"></div>
            </div>
          </div>
          <div class="boxF">
            <div class="boxS">
              <div class="boxD"></div>
            </div>
          </div>
          <div class="boxF">
            <div class="boxS">
              <div class="boxD"></div>
            </div>
          </div>
        </div>
        <div class="left">
          <img
            src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/index/ban-1_2b1686e.png"
            alt
          />
        </div>
        <div class="right">
          <img
            src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/index/ban-2_9a175b7.png"
            alt
          />
        </div>
      </div>
    </div>

    <div class="tag-area">
      <div class="tag-list">
        <a href v-for="(item,index) in tag[2].taglistone" :key="index">{{item}}</a>

       <img
            src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/index/icon-3_b996a60.png"
            alt
          />
      </div>
      <div class="tag-list">
          <a href v-for="(item,index) in tag[2].taglisttwo" :key="index">{{item}}</a>
       <img
            src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/index/icon-3_b996a60.png"
            alt
          />
      </div>
    </div>

    <div class="banner-area">
      <div class="bg-img">
        <img
          src="http://shihuo.hupucdn.com/appZones/201701/1815/f08e00fd62f3e0b2561e45c9f5db0272.png?imageView2/0/w/400/h/208/interlace/1"
          alt
        />
      </div>
      <div class="ban-text">
        <div class="h2">
          <span>健身</span>FITNESS
          <img
            src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/index/ban-go_f747d60.png"
            alt
          />
        </div>
        <div class="txt">
          <p>Landcase 暗黑系列 大容量镭射双肩包 Z-301, ASICS亚瑟士 女印花紧身长裤 135264 , adidas 运动短袖T恤 DN7389, Under Armour 运动长袖T恤 1328496</p>
          <p>战斗绳狂塑</p>
        </div>

        <div class="list">
          <div class="boxF">
            <div class="boxS">
              <div class="boxD"></div>
            </div>
          </div>
          <div class="boxF">
            <div class="boxS">
              <div class="boxD"></div>
            </div>
          </div>
          <div class="boxF">
            <div class="boxS">
              <div class="boxD"></div>
            </div>
          </div>
          <div class="boxF">
            <div class="boxS">
              <div class="boxD"></div>
            </div>
          </div>
        </div>
        <div class="left">
          <img
            src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/index/ban-1_2b1686e.png"
            alt
          />
        </div>
        <div class="right">
          <img
            src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/index/ban-2_9a175b7.png"
            alt
          />
        </div>
      </div>
    </div>

    <div class="tag-areas">
      <div class="tag-list">
          <a href v-for="(item,index) in tag[3].taglistone" :key="index">{{item}}</a>

       <img
            src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/index/icon-3_b996a60.png"
            alt
          />
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "Nav",
  data() {
    return {
      tag: [
        {
          taglistone: ["篮球鞋", "篮球服饰", "篮球配件", "篮球"],
          taglisttwo: ["Nike", "adidas", "jordan", "全部"]
        },
        {
          taglistone: ["跑步鞋", "跑步服饰", "跑步配件", "运动补给"],
          taglisttwo: ["adidas", "asics", "New Banlance", "全部"]
        },
        {
          taglistone: ["鞋类", "服饰", "配件", "耳机"],
          taglisttwo: ["Converse", "CASIO", "Vans", "全部"]
        },
        {
          taglistone: ["健身设备", "健身用品", "营养补给", "全部类目"]
        }
      ]
    };
  }
};
</script>


<style scoped>
/* banner-area */

.banner-area {
  position: relative;
  height: 1.8rem;
  background: pink;
}
.banner-area .bg-img {
  height: 1.8rem;
}
.banner-area .bg-img img {
  width: 100%;
  height: 100%;
}
.banner-area .ban-text {
  position: absolute;
  left: -0.1rem;
  width: 100%;
  top: 0.3rem;
  text-align: center;
  color: #fff;
  font-size: 0.24rem;
}
.banner-area .ban-text .h2 img {
  position: absolute;
  top: 0.02rem;
  right: 0.5rem;
  width: 0.24rem;
  height: 0.24rem;
}

.banner-area .ban-text .txt {
  font-size: 0.12rem;
  margin-top: 0.1rem;
}
.banner-area .ban-text .txt p {
  padding-left: 0.5rem;
  margin-top: 0.06rem;
  width: 2.5rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.banner-area .ban-text .left img {
  position: absolute;
  left: 0.46rem;
  top: 0.12rem;
  height: 1.1rem;
}
.banner-area .ban-text .right img {
  position: absolute;
  right: 0.18rem;
  top: 0.12rem;
  height: 1.1rem;
}

/* 六边形背景图片 */
.banner-area .ban-text .list {
  position: absolute;
  width: 2.6rem;
  height: 0.7rem;
  left: 0.7rem;
  top: 0.8rem;
  overflow: hidden;
}

/*  */
.boxF {
  width: 0.5rem;
  height: 0.7rem;
  margin: auto;
  transform: rotate(120deg);
  overflow: hidden;
  float: left;
  padding-right: 0.05rem;
  margin-left: 0.03rem;
}
.boxS {
  width: 0.5rem;
  height: 0.7rem;
  transform: rotate(-60deg);
  margin: auto;
  overflow: hidden;
  position: absolute;
}
.boxD {
  width: 0.5rem;
  height: 0.7rem;
  transform: rotate(-60deg);
  background: #fff;
  margin: auto;

  background: url(http://shihuo.hupucdn.com/trade/goods/style/20170411/adecead744a0d0c0a81a4803c5c84a821491896490.jpg?imageView2/1/w/100/h/100)
    center center;
  background-size: 100%;

  overflow: hidden;
  position: absolute;

  /*     
    background: ;
      */
}

/* tag-area */

.tag-area {
  width: 98%;
  height: 0.9rem;
}
.tag-area .tag-list {
  width: 100%;
  height: 0.45rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
}
.tag-area .tag-list a {
  display: block;
  width: 25%;
  height: 0.45rem;
  color: black;
  text-align: center;
  line-height: 0.45rem;
  font-size: 0.16rem;
}
.tag-area .tag-list a:last-child {
  position: relative;
}
.tag-area .tag-list a:last-child img {
  position: absolute;
  width: 0.07rem;
  left: 0.64rem;
  top: 0.15rem;
}

/* 单行 */

.tag-areas {
  width: 100%;
  height: 0.45rem;
}
.tag-areas .tag-list {
  width: 100%;
  height: 0.45rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
}
.tag-areas .tag-list a {
  display: block;
  width: 25%;
  height: 0.45rem;
  color: black;
  text-align: center;
  line-height: 0.45rem;
  font-size: 0.16rem;
}
.tag-areas .tag-list a:last-child {
  position: relative;
}
.tag-areas .tag-list a:last-child img {
  position: absolute;
  width: 0.07rem;
  left: 0.64rem;
  top: 0.15rem;
}
</style>