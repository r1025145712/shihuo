<template>
  <div>
    <ul class="list">
      <div v-for="(item,index) in singleList" :key="index">
        <li class="clearfix" v-if="item.show_type=='single3'">
          <div class="imgs">
            <img :src="item.data.img" alt />
          </div>

          <div class="txt-area">
            <div class="title">{{item.data.title}}</div>
            <div class="txt">{{item.data.intro}}</div>
            <div class="price">
              <div class="t1">
                {{item.data.merchant}}
                <s>¥{{item.data.price}}</s>
              </div>
              <div class="t2">
                <img
                  src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/index/icon-2_2bc8bc4.png"
                  alt
                />
                <span>{{item.data.hits}}</span>
              </div>
            </div>
          </div>
        </li>
      </div>
    </ul>
  </div>
</template>

<script>
import { basketBall } from "@api/equip";
export default {
  name: "Single",
  data() {
    return {
      single: {},
      singleList: []
    };
  },
  created() {
    this.handlerSingle();
  },
  methods: {
    async handlerSingle() {
      let data = await basketBall({
        pageSize: 20,
        param_str: "",
        type: "basketball",
        newsId: "",
        channel_type: 11
      });
      console.log(data);
      this.single = data;
      this.singleList = data.data;
    }
  }
};
</script>


<style >
.list .clearfix {
  height: 1.15rem;
  padding: 0.2rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.01rem solid #ccc;
}
.list .clearfix .imgs {
  width: 1.1rem;
  height: 1.1rem;
  margin-left: 0.1rem;
}
.list .clearfix .imgs img {
  width: 1.1rem;
  height: 1.1rem;
}
.list .clearfix .txt-area {
  position: relative;
  height: 1.1rem;
  width: 2rem;
  flex: 1;
}

.list .clearfix > .txt-area > div:first-child {
  font-size: 0.16rem;
  height: 0.4rem;
  overflow: hidden;
  padding-left: 0.1rem;
}

.list .clearfix > .txt-area > div:nth-child(2) {
  height: 0.4rem;
  font-size: 0.1rem;
  padding-left: 0.1rem;
}
.list .clearfix > .txt-area > div:nth-child(3) {
  width: 2rem;
  height: 0.3rem;
  line-height: 0.3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 0.1rem;
}
.list .clearfix > .txt-area > div:nth-child(3) .t1 s {
  text-decoration: none;
  font-weight: bold;
  color: chocolate;
}

.list .clearfix > .txt-area > div:nth-child(3) .t2 {
  padding-right: 0.1rem;
}
.list .clearfix > .txt-area > div:nth-child(3) .t2 span {
  display: inline-block;
}
.list .clearfix > .txt-area > div:nth-child(3) .t2 img {
  width: 0.1rem;
  display: inline-block;
}
</style>