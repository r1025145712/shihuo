<template>
  <div>
    <div class="tj-area">
      <p>最新推荐</p>
      <div class="clearfix" v-for="(item,index) in list " :key="index">
        <div class="imgs">
          <img :src="item.data.img" alt />
        </div>

        <div class="txt-area">
          <div class="title">{{item.data.title}}</div>
          <div class="txt">{{item.data.intro}}</div>
          <div class="price">
            <div class="t1">
              {{item.data.merchant}}
              <s>{{item.data.price}}</s>
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
      </div>
    </div>
  </div>
</template>


<script>
import { equip } from "@api/equip.js";
export default {
  name: "Main",
  data() {
    return {
      page: 1,
      list: []
    };
  },
  created() {
    this.loadingMore(this.page);
  },
  methods: {
    loadingMore(page) {
      equip({ page: page }).then(data => {
        console.log(data);
        this.list = [...this.list,...data.data]
      });
    }
  },
  mounted() {
    let that = this;
    
    window.addEventListener("scroll", function() {
      if (
        window.pageYOffset + window.innerHeight >=
        document.documentElement.scrollHeight
      ) {
        that.page++;
        console.log(111);
        that.loadingMore(that.page);
      }
    });
  }
};
</script>


<style scoped>
.tj-area .clearfix {
  height: 1.4rem;
  padding: 0.05rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.01rem solid #ccc;
}
.tj-area .clearfix .imgs {
  width: 1.1rem;
  height: 1.1rem;
  margin-left: 0.1rem;
}
.tj-area .clearfix .imgs img {
  width: 1.1rem;
  height: 1.1rem;
}
.tj-area .clearfix .txt-area {
  position: relative;
  height: 1.1rem;
  width: 2rem;
  flex: 1;
}

.tj-area > .clearfix > .txt-area > div:first-child {
  font-size: 0.16rem;
  height: 0.4rem;
  overflow: hidden;
  padding-left: 0.1rem;
}

.tj-area > .clearfix > .txt-area > div:nth-child(2) {
  height: 0.4rem;
  font-size: 0.1rem;
  padding-left: 0.1rem;
}
.tj-area > .clearfix > .txt-area > div:nth-child(3) {
  width: 2rem;
  height: 0.3rem;
  line-height: 0.3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 0.1rem;
}
.tj-area > .clearfix > .txt-area > div:nth-child(3) .t1 s {
  text-decoration: none;
  font-weight: bold;
  color: chocolate;
}

.tj-area > .clearfix > .txt-area > div:nth-child(3) .t2 {
  padding-right: 0.1rem;
}
.tj-area > .clearfix > .txt-area > div:nth-child(3) .t2 span {
  display: inline-block;
}
.tj-area > .clearfix > .txt-area > div:nth-child(3) .t2 img {
  width: 0.1rem;
  display: inline-block;
}
</style>