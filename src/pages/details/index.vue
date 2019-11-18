<template>
  <div class="mainBox">
    <TOP />
    <div class="top-block">
      <div class="pro_img">
        <img alt="Nike Air Zoom Pegasus 36 黑橘" :src="img" width="100%" />
      </div>
    </div>
    <div class="pro_title clearfix">
      <div class="n-font">{{title}}</div>
      <p class="cr">到手价{{price}}元</p>
    </div>
    <div class="goods-detail-box">
      <div class="goods-detail editor-frame" id="goods-detail" style>
        <p>{{intro}}</p>
      </div>
    </div>
  </div>
</template>
<script>
import TOP from "./top";
export default {
  name: "top",
  data() {
    return {
      title: "",
      img: "",
      intro: "",
      price:""
    };
  },
  components: {
    TOP,
  },
  created() {
    console.log(this.$route.params);
    /*
        动态路由 */
    let { title, img, intro,price } = this.$route.params;
    this.img = img;
    this.title = title;
    this.intro = intro;
    this.price=price
  }
};
</script>
<style >
.mainBox {
  display: flex;
  flex-direction: column;
}
.top-block {
  background: #fff;
}
.pro_img {
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
  text-align: center;
}
.pro_img img {
  width: 80%;
  margin-left: 10%;
}
.pro_title {
  background: #fff;
  color: #333333;
  width: 100%;
  padding: 0.1rem 0.1rem;
}
.pro_title .n-font {
  color: #333333;
  width: 100%;
  font-size: 0.16rem;
  font-weight: normal;
}
.cr {
  color: #ff4338;
  margin-top: 0.05rem;
  clear: both;
  font-size: 0.14rem;
}
.goods-detail-box {
    width: 100%;
    background: #fff;
    padding: 0 .05rem;
    margin-bottom: .1rem;
}
.goods-detail-box .goods-detail p {
    text-indent: 2em;
}

body .editor-frame>p {
    padding: 5px 0;
}
p {
  font-size: 0.16rem;
  line-height: 0.3rem;
  color: #333;
  white-space: pre-line;
}
</style>