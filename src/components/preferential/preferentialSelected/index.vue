<template>
  <div class="youhui-list" id="vue-js-list">
    <ul>
      <li>
        <a class="kanqiu_href2" href="http://m.shihuo.cn/youhui/564697.html">
          <div class="imgs">
            <span class="get_imgs">
              <img
                src="http://shihuo.hupucdn.com/newsIndex11/201911/0715/bad32c1fab700189f35b185dc043448a.jpg?imageView2/0/w/600/h/600/interlace/1"
                class="lazy"
                data-original="http://shihuo.hupucdn.com/newsIndex11/201911/0715/bad32c1fab700189f35b185dc043448a.jpg?imageView2/0/w/600/h/600/interlace/1"
              />
            </span>
            <span class="top">置顶</span>
          </div>
          <div class="details_box">
            <h2>又到一年中最最最冷的时候！这份私藏的取暖秘籍拿好了~</h2>
            <p class="subtitle">精选取暖神器大集合</p>
            <div class="from">
              <div class="shop">天猫国际</div>
              <div class="date">2019-11-07</div>
            </div>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped>
.youhuiIndex .youhui-list {
    background: #fff;
    padding-top: .064rem;
    padding-left: .064rem;
    width: 100%;
    height: auto;
    overflow: hidden;
}

.youhuiIndex .youhui-list ul{
    width: 100%;
    height: auto;
}

.youhuiIndex .youhui-list ul li{
    width: 100%;
    height: 1.09rem;
}

.youhuiIndex .youhui-list ul>li>a {
    width: 100%;
    height: 1.09rem;
    padding: .064rem;
    padding-left: 0;
    border-bottom: .005rem solid #e6e6e6;
    display: flex;
    color: #444;
    text-decoration: none;
}

.youhuiIndex .youhui-list ul>li>a .imgs {
    width: 30%;
    height: .962rem;
    float: left;
    position: relative;
}

.youhuiIndex .youhui-list ul>li>a .imgs .get_imgs {
    width: 100%;
    height: 100%;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center
}

.youhuiIndex .youhui-list ul>li>a .imgs .get_imgs img {
    width: 100%;
    display: block;
}
.youhuiIndex .youhui-list ul>li>a .imgs .top {
    position: absolute;
    top: .064rem;
    left: 0;
    background: rgba(0,0,0,.6);
    border-radius: .04rem;
    color: #FFF;
    font-size: .12rem;
    padding: .02rem .0425rem;
}

.youhuiIndex .youhui-list ul>li>a .details_box {
    width: 66%;
    position: relative;
    margin-left: .085rem;
    height: .96rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.youhuiIndex .youhui-list ul>li>a .details_box h2 {
    width: 100%;
    font-size: .15rem;
    color: #333;
    font-weight: 400;
    max-height: .35rem;
    /* overflow: hidden; */
    word-break: break-all;
    line-height: .175rem;
}

.youhuiIndex .youhui-list ul>li>a .details_box .subtitle {
    bottom: .2rem;
    left: 0;
    font-size: .128rem;
    color: #FF4338;
    line-height: .185rem;
}

.youhuiIndex .youhui-list ul>li>a .details_box .from {
    color: #999;
    font-size: .1rem;
}

.youhuiIndex .youhui-list ul>li>a .details_box .from .shop {
    float: left;
}

.youhuiIndex .youhui-list ul>li>a .details_box .from .date {
    float: right;
}






.a{
    height: 10rem;
}
</style>
