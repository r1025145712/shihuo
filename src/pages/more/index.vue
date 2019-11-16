<template>
  <section class="mainBox">
    <div class="banner_block">
      <div class="userface">
        <img
          src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/user/head_02977e3.png"
          alt
        />
      </div>
      <div class="login" v-if="box==true">
        <router-link to="/register" tag="a">登录</router-link>
        <a href>注册</a>
        <p class="jb">金币 0</p>
      </div>
      <div class="login" v-if="box==false">
        {{name}}
        <span class="level level1"></span>
        <p class="jb">
          金币&nbsp;&nbsp;0
          <a class="out" @click="hanleOut" href="/more">退出 &gt;</a>
        </p>
      </div>
    </div>
    <!-- 我的识货 -->
    <div class="menu_list">
      <div class="tit">
        <span>我的识货</span>
      </div>
      <ul>
        <li>
          <a href="register">
            <img
              src="http://sh1.hoopchina.com.cn/images/trade/app/personal/collect_content.png"
              alt
            />
            <p>我的收藏</p>
          </a>
        </li>
        <li>
          <a href>
            <img src="http://sh1.hoopchina.com.cn/images/trade/app/personal/my_shaiwu.png" alt />
            <p>我的晒物</p>
          </a>
        </li>
        <li>
          <a href>
            <img src="http://sh1.hoopchina.com.cn/images/trade/app/personal/kaiquan.png" alt />
            <p>我的礼品</p>
          </a>
        </li>
      </ul>
    </div>
    <!-- 识货必备 -->
    <div class="menu_list">
      <div class="tit">
        <span>识货必备</span>
      </div>
      <ul>
        <li>
          <a href>
            <img src="http://sh1.hoopchina.com.cn/images/trade/app/personal/tuijiandianpu.png" alt />
            <p>推荐店铺</p>
          </a>
        </li>
        <li>
          <a href>
            <img src="http://sh1.hoopchina.com.cn/images/trade/app/personal/select_shoe.png" alt />
            <p>黑科技选鞋</p>
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import Vue from 'vue';
import { Toast } from 'vant';

Vue.use(Toast)
export default {
  name: "more",
  created() {
    document.title = this.$route.meta.title;
    let data = JSON.parse(sessionStorage.getItem("user"));
    this.hanleIf(data);
  },
  data() {
    return {
      box: true,
      name: ""
    };
  },
  methods: {
    hanleIf(data) {
      if (data.name == "") {
        this.box = true;
      } else {
        this.box = false;
        this.name = data.name;
      }
    },
    hanleOut() {
      sessionStorage.removeItem("user");
     Toast.success('已退出');
    }
  }
};
</script>

<style  scoped>
.mainBox {
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
}
.banner_block {
  width: 100%;
  height: 1.28rem;
  background: url(http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/user/bg_912a95a.png)
    top no-repeat;
  background-size: 100% auto;
  font-family: Helvetica, sans-serif;
}
.banner_block .userface {
  width: 0.425rem;
  height: 0.425rem;
  margin-top: 0.6rem;
  overflow: hidden;
  border-radius: 50%;
  margin-left: 0.21rem;
  box-shadow: 0 0 30px rgba(255, 255, 255, 0.5);
  float: left;
}
.banner_block .userface img {
  width: 100%;
  height: 100%;
}
.banner_block .login {
  padding-left: 0.21rem;
  width: 75%;
  float: left;
  margin-top: 0.64rem;
  font-size: 0.14rem;
  color: #fff;
}
.banner_block .login .level {
    background: url(//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/user/level_1_c8e5252.png) no-repeat;
    background-size: 100%;
    display: inline-block;
    width: .21rem;
    height: .15rem;
    vertical-align: middle;
}
.banner_block .login a {
  color: #fff;
  font-size: 0.15rem;
  margin-right: 0.085rem;
}
.banner_block .jb {
  margin-top: 0.04rem;
  font-size: 0.12rem;
}
.banner_block .login .out {
    float: right;
    font-size: .12rem;
    color: #999;
}
/* 我的识货 */
.menu_list {
  padding: 0.06rem;
  background: #fff;
  margin-bottom: 0.09rem;
}
.menu_list .tit {
  font-size: 0.14rem;
  color: #333;
  background: url(http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/user/border_88b19b4.png)
    left center repeat-x;
  background-size: 0.02rem;
}
.menu_list .tit span {
  background: #fff;
  padding: 0 0.05rem;
}
.menu_list ul {
  display: flex;
  align-items: center;
}
.menu_list ul li {
  width: 25%;
  text-align: center;
  color: #333;
  font-size: 0.12rem;
  margin: 0.09rem 0;
  position: relative;
}
.menu_list ul li a {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.menu_list ul li a img {
  width: 0.38rem;
  margin-bottom: 0.1rem;
}
</style>