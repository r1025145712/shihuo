<template>
  <div class="top_bar">
    <div class="goback">
      <a @click="hanleCb">
        <img
          src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/common/widget/header/head_back_b142dc1.png"
        />
      </a>
    </div>
    <span class="d-title">识货-栏目</span>
    <div class="ico_list" @click="hanleColumnCb()">
      <img
        src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/common/widget/header/head_list_4a4f511.png"
      />
    </div>
    <div class="header_nav" id="header_nav" v-if="box">
      <div class="inner">
        <ul>
          <li>
            <a href="#/shouye" class="icons index">
              <img
                src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/common/widget/header/homepage-icon_605ed60.png"
              />首页
            </a>
          </li>
          <li>
            <a href="#/more" class="icons me">
              <img
                src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/common/widget/header/user-center-icon_77dfd45.png"
              />我的
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "top",
  data(){
      return{ box: false,
  }},
  methods: {
    hanleColumnCb() {
      this.box = !this.box;
    },
      hanleCb(){
       this.$router.back();
    }
  }
};
</script>
<style >
.top_bar {
  background-color: #f7f7f7;
  height: 0.48rem;
  width: 100%;
  position: fixed;
  top: 0;
  text-align: center;
  z-index: 90;
  border-bottom: 1px solid #e6e6e6;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.top_bar .goback {
  width: 0.48rem;
  height: 0.48rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.top_bar .goback img {
  width: 100%;
}
.top_bar .d-title {
  color: #333;
  font-size: 0.2rem;
  display: inline-block;
  overflow: hidden;
  width: 1.6rem;
  height: 0.3rem;
  font-weight: 900;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.top_bar .ico_list {
  width: 0.48rem;
  height: 0.48rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.top_bar .ico_list img {
  width: 0.4rem;
  height: 0.4rem;
}
.header_nav {
  position: absolute;
  display: block;
  width: 36%;
  height: 0.9rem;
  right: 0.1rem;
  top: 0.48rem;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 0.04rem;
  z-index: 99;
}
.header_nav:before {
  content: "";
  position: absolute;
  right: 0.08rem;
  top: -0.05rem;
  border-bottom: 0.05rem solid rgba(0, 0, 0, 0.7);
  border-left: 0.06rem solid transparent;
  border-right: 0.06rem solid transparent;
}
.header_nav li:first-child {
  border-bottom: 1px solid #5c5c5c;
}
.header_nav a {
  color: #fff;
  line-height: 0.45rem;
  text-align: center;
  font-size: 0.14rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.header_nav a img {
  display: inline-block;
  width: 0.2rem;
  height: 0.2rem;
  margin: -0.05rem 0.05rem 0 0;
}
</style>