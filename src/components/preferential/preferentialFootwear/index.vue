<template>
  <div class="youhui-list" id="vue-js-list">
    <ul>
      <li  v-for="(item,index) in list" :key="index">
        <a class="kanqiu_href2" :href=item.href>
          <div class="imgs">
            <span class="get_imgs">
              <img
                :src=item.img
                class="lazy"
                :data-original=item.img
              />
            </span>
            <span class="top" v-if="item.tag != ''">{{item.tag}}</span>
          </div>
          <div class="details_box">
            <h2>{{item.title}}</h2>
            <p class="subtitle">{{item.subtitle}}</p>
            <div class="from">
              <div class="shop">{{item.business}}</div>
              <div class="date">{{item.date}}</div>
            </div>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import {preferentialFootwear} from "../../../api/shop";

export default {
  name:"preferentialFootwear",
  async created() {
    let data=await preferentialFootwear(30);
    this.list=data.data
  },
  components: {},
  data() {
    return {
      list:[],
    };
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
    font-family:not specified;
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
