<template>
  <div class="page_home">
    <div class="pic_banner">
      <ul class="zone">
        <li :class="item.sign" v-for="(item,index) in tabs" :key="index">
          <a href style="display:block;overflow:hidden;">
            <div class="tit">
              <h2>{{item.name}}</h2>
              <p class="subtit">{{item.text}}</p>
            </div>
            <div class="pic">
              <img :src="item.img" alt />
            </div>
          </a>
        </li>
      </ul>
    </div>
    <section class="hot clearfix">
      <a class="block" href>
        <h2>今日优惠</h2>
        <p class="desc">EQT 5折好价</p>
        <p class="imgs">
          <img
            src="http://shihuo.hupucdn.com/appHome/201807/1811/1d039f64648d5e33025c747ec6420060.jpg?imageView2/2/w/120/h/120/interlace/1"
            alt="今日优惠"
          />
        </p>
      </a>
      <a class="block" href>
        <h2>限时团购</h2>
        <p class="desc">春节不打烊</p>
        <p class="imgs">
          <img
            src="http://shihuo.hupucdn.com/appHome/201802/0716/5d0eea37252cd190ba0975b3e5e1f49e.png?imageView2/2/w/120/h/120/interlace/1"
            alt="限时团购"
          />
        </p>
      </a>
      <a class="block" href>
        <h2>免费抽奖</h2>
        <p class="desc">识货抽奖 天天免费</p>
        <p class="imgs">
          <img
            src="http://shihuo.hupucdn.com/kupload2018/2019715/15631798110000.jpeg?imageView2/2/w/120/h/120/interlace/1"
            alt="免费抽奖"
          />
        </p>
      </a>
    </section>
      <!-- 热门活动 -->
            <section class="hot-activity clearfix">
                <h3>热门活动</h3>
                <ul>
                    <router-link :to="item.path"  tag="li" v-for="(item,index) in activitys" :key="index">
                        <a >
                            <div class="img">
                                <img :src="item.img"
                                    alt="">
                            </div>
                            <p class="p1">{{item.text}}</p>
                            <p class="p2"><span>{{item.name}}</span></p>
                        </a>
                    </router-link>
                </ul>
            </section>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      tabs: [
        {
          sign: "zone0",
          text: "纯白系列秒杀",
          name: "篮球",
          img:
            "http://shihuo.hupucdn.com/def/20181105/2355ddafee2bdc0963e346192576c3631541383761.jpg?imageView2/0/w/160/h/160/interlace/1"
        },
        {
          sign: "zone1",
          text: "女王节秒杀",
          name: "跑步",
          img:
            "http://shihuo.hupucdn.com/def/20180801/a580ec1affbbf4a344974bc92969c7671533133549.jpg?imageView2/0/w/160/h/160/interlace/1"
        },
        {
          sign: "zone2",
          text: "步瑞特装备秒杀",
          name: "健身",
          img:
            "http://shihuo.hupucdn.com/def/20170915/0446a5d97bf800d5322341aab554035d1505460763.jpg?imageView2/0/w/160/h/160/interlace/1"
        },
        {
          sign: "zone3",
          text: "其实是在吹总裁",
          name: "足球",
          img:
            "http://shihuo.hupucdn.com/def/20181105/2355ddafee2bdc0963e346192576c3631541383761.jpg?imageView2/0/w/160/h/160/interlace/1"
        },
        {
          sign: "zone4",
          text: "78元短袖秒杀",
          name: "潮流",
          img:
            "http://shihuoproxy.hupucdn.com/aHR0cDovL2ltZy5hbGljZG4uY29tL2ltZ2V4dHJhL2kzL1RCMVVoVUtSVlhYWFhhTVhwWFhYWFhYWFhYWF8hITItaXRlbV9waWMucG5n?imageView2/0/w/160/h/160/interlace/1"
        },
        {
          sign: "zone5",
          text: "家用电吹风",
          name: "数码",
          img:
            "http://shihuo.hupucdn.com/def/20180108/d46c35eb43ed513783e8db72e97e06a71515391268.jpg?imageView2/0/w/160/h/160/interlace/1"
        }
      ],
      activitys:[
         {
          path: "/brand",
          text: "skullcandy骷髅头耳机",
          name: "券后低至89元起",
          img:
            "http://shihuo.hupucdn.com/appHome/201808/1710/5e683699826e2a13abd239e4e4e36793.jpg"
        },
         {
          path: "/brand",
          text: "热门资讯",
          name: "最新最热门的数码资讯",
          img:
            "http://shihuo.hupucdn.com/appZone/201805/1414/c5f797407c24e87cb7648abc937e9955.jpg"
        },
         {
          path: "/brand",
          text: "跑步评测室",
          name: "最炫酷的跑步装备评测",
          img:
            "http://shihuo.hupucdn.com/appZone/201803/2617/e6ae975eca6480b86354e92fa866a8e1.jpg"
        },
         {
          path: "/brand",
          text: "1000块包全身",
          name: "不说虚话",
          img:
            "http://shihuo.hupucdn.com/appZone/201811/1214/2720301b13ee5c2b0003f78125b698ea.jpg"
        },
         {
          path: "/brand",
          text: "考虑一下荧光绿",
          name: "要想生活过的去",
          img:
            "http://shihuo.hupucdn.com/appZone/201811/1214/ea91521753d0e0f95f4a5c82094aee79.jpg"
        },
          {
          path: "/brand",
          text: "花鸟市场行",
          name: "今天穿这样",
          img:
            "http://shihuo.hupucdn.com/appZone/201811/1214/7d721a0762b1a4762557aa33c75e6404.jpg"
        },
      ]
    };
  }
};
</script>

<style  scoped>
.page_home {
  display: flex;
  flex-direction: column;
}
.pic_banner {
  background: #fff;
  margin-top: 0.05rem;
  border-bottom: 1px solid #e6e6e6;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
}
.pic_banner .zone li {
  width: 50%;
  float: left;
  border-bottom: 1px solid #f0f3f5;
  border-left: 1px solid #f0f3f5;
  padding: 0.02rem 0.125rem;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
}
.pic_banner .zone .tit {
  width: 0.8rem;
  float: left;
  margin-top: 0.05rem;
}
.pic_banner .zone .tit h2 {
  font-size: 0.125rem;
  color: #333;
  font-weight: 600;
  height: 0.19rem;
}
.pic_banner .zone .tit p {
  font-size: 0.1rem;
  color: #666;
  width: 0.8rem;
  white-space: nowrap;
  overflow: hidden;
  height: 0.15rem;
}
.pic_banner .zone .pic {
  float: right;
}
.pic_banner .zone .pic img {
  width: 0.45rem;
  height: 0.45rem;
}

/* 列表 */
.hot{
    
    margin: .025rem;
    background: #f0f3f5;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  
}
.hot .block {
    text-align: center;
    padding: .06rem 0;
    width: 1rem;
    float: left;
    background: #fff;
    margin: .02rem;
}
.hot .block h2 {
    font-size: .12rem;
    color: #333;
    font-weight: 400;
}
.hot .block p.desc {
    font-size: .1rem;
    color: #666;
    margin: .04rem 0;
    margin-bottom: .085rem;
    width: 100%;
}
.hot .block p.imgs {
   width: 1rem;
    height: .5rem;
    display: flex;
    justify-content: center;
    align-items: center;

}
.hot .block p.imgs img {
    width: .51rem;
}


/* 热门活动 */

.hot-activity {
    background: #FFF;
    margin: .03rem .055rem;
}
.hot-activity h3 {
    font-size: .14rem;
    line-height:.15rem;
    padding: .1rem .15rem;
    margin-bottom: .05rem;
}
.hot-activity ul {
    padding: 0 .15rem;
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
}
.hot-activity ul li {
    float: left;
    width: 32%;
    margin-right: 1.2%;
    margin-bottom: .125rem;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
}
.hot-activity ul li .img {
    height: .57rem;
    overflow: hidden;
    margin-bottom: .04rem;
}
.hot-activity ul li .img img {
    width: 100%;
}
.hot-activity ul li .p1 {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.hot-activity ul li .p1 {
    font-weight: 700;
    font-size: .12rem;
    width: 100%;
}
.hot-activity ul li .p2 {
    color: #666;
    text-align: left;
}
.hot-activity ul li p {
    line-height: .15rem;
}
.hot-activity ul li .p2 span {
    display: inline-block;
    font-size: .12rem;
    transform: scale(0.8333);
}
</style>