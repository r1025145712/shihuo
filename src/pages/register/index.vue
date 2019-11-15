<template>
  <div class="register">
    <header class="common-header">
      <a href="#/more">
        <span>后退</span>
      </a>
      <img src="https://passport.hupu.com/m/2/images/shihuo.png" alt />
    </header>
    <section class="home-wrapper">
      <form action class="index-from">
        <div class="input-box name-ipt">
          <label class="text-label text-label-user" for="login-username"></label>
          <input
            ref="username"
            class="username"
            type="text"
            data-text="账号"
            name="account"
            placeholder="登录名/手机号/邮箱"
            id="login-username"
          />
        </div>
        <div class="input-box pwd-ipt">
          <label class="text-label text-label-pwd" for="login-pwd"></label>
          <input
            ref="password"
            type="password"
            class="userpassword"
            data-text="密码"
            name="password"
            placeholder="密码"
            onpaste="return false;"
            id="login-pwd"
          />
          <em class="error-icon"></em>
          <!-- 			<div class="sep"><span></span></div> -->
          <!-- 			<a href="#" class="forget-pwd">忘记密码</a> -->
        </div>
        <div class="form-item-btn">
          <a @click="hanleSub" dace-node="8000_reg">注册</a>
          <input
            type="submit"
            @click="hanleAdd"
            value="登录"
            class="login-btn"
            dace-node="8000_login"
          />
        </div>
      </form>
      <div class="other-login">
        <i id="wx_login_display_i" style="display:none"></i>
        <a
          id="wx_login_display_a"
          style="display:none"
          href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx5549e304bc4c1d0d&amp;redirect_uri=https%3A%2F%2Fpassport.hupu.com%2Fpc%2Fweixincallback.action%3Ftype%3Dlogin%26project%3Dmwechat%26jumpurl%3Dhttp%3A%2F%2Fm.shihuo.cn%2Fuser&amp;response_type=code&amp;scope=snsapi_userinfo&amp;state=7e61d9f8-ca5d-409a-825f-38d526f41d72#wechat_redirect"
          class="wechat-login"
          dace-node="8000_qq"
        >
          <span>微信登录</span>
        </a>
        <i></i>
        <a href="/m/2/index/qqlogin" class="qq-login" dace-node="8000_qq">
          <span>QQ登录</span>
        </a>
        <i></i>
        <a href="/m/2/index/mobilelogin" dace-node="8000_mobile" class="phone-login">
          <span>手机登录</span>
        </a>
        <i></i>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "more",
  created() {
    document.title = this.$route.meta.title;
  },
  created() {},
  methods: {
    hanleSub() {
      let username = this.$refs.username.value;
      let password = this.$refs.password.value;
      let name = Math.random()
        .toString(36)
        .substr(2, 8);
    
        // axios({
        //   method: "get",
        //   url: "http://localhost:3000/user?username=" + username
        // }).then(data => {
        //   if (data.data[0].username == username) {
        //     alert("用户名已经被注册");
        //   }
        // });
     
        axios({
          method: "post",
          url: "http://localhost:3000/user",
          data: {
            username: username,
            password: password,
            name: name
          }
        });
    },
    hanleAdd() {
      var username = this.$refs.username.value;
      var password = this.$refs.password.value;
      axios({
        method: "get",
        url:
          "http://localhost:3000/user?username=" +
          username +
          "&password=" +
          password
      }).then(data => {
        sessionStorage.setItem("user", JSON.stringify(data.data[0]));
        this.$router.push("/more");
      });
    }
  },
  mounted() {}
};
</script>

<style  scoped>
.register {
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
}
.common-header,
.common-header2 {
  width: 100%;
  height: 0.4rem;
  background-color: #f4f4f4;
  text-align: center;
  position: relative;
  font: 0.08rem "microsoft yahei";
  line-height: 0.4rem;
  color: #000;
  border-top: 1px solid #e1e1e1;
  border-bottom: 1px solid #e1e1e1;
}
.common-header a {
  position: absolute;
  left: 0;
  top: 0;
  width: 0.4rem;
  height: 0.4rem;
  text-align: center;
}
.common-header a span {
  display: inline-block;
  width: 0.14rem;
  height: 0.14rem;
  margin-top: 0.12rem;
  border-left: 1px solid #ca0000;
  border-top: 1px solid #ca0000;
  text-indent: -999em;
  overflow: hidden;
  transform: rotate(-45deg);
}
.common-header img {
  display: block;
  width: 0.83rem;
  margin: 0.08rem auto 0;
}
/* 表单 */
.home-wrapper {
  height: 2.3rem;
  width: 3.4rem;
  padding: 0.25rem 0 0;
  background: #fff;
}
.input-box {
  position: relative;
  overflow: hidden;
  display: box;
  width: 100%;
  height: 0.32rem;
  background: #fff;
  margin-bottom: 0.15rem;
  padding-left: 0.24rem;
}
.input-box .text-label-user {
  background: url(https://w1.hoopchina.com.cn/passport-prod/static/m/2/images/user.png)
    0.02rem 0.1rem no-repeat;
  background-size: 0.13rem 0.15rem;
}
.input-box .text-label-pwd {
  background: url(https://w1.hoopchina.com.cn/passport-prod/static/m/2/images/lock.png)
    0.02rem 0.1rem no-repeat;
  background-size: 0.13rem 0.16rem;
}
.name-ipt input,
.pwd-ipt input {
  padding-right: 0.2rem;
}
.username,
.userpassword {
  width: 2.76rem;
  height: 0.32rem;
  border-bottom: 1px solid #e1e1e1;
  display: block;
  float: left;
  line-height: 0.32rem;
  font-size: 0.15rem;
  color: #222;
}
input::-webkit-input-placeholder {
  color: #e3e8ef;
}
input::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color: #e3e8ef;
}
input:-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  color: #e3e8ef;
}
input:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: #e3e8ef;
}
.text-label {
  display: block;
  width: 0.24rem;
  height: 0.32rem;
  float: left;
}
.pwd-ipt,
.phone-ipt {
  margin-bottom: 0.25rem;
}
.form-item-btn {
  margin-top: 0.5rem;
  text-align: center;
}
.form-item-btn input,
.form-item-btn a {
  text-align: center;
  width: 0.75rem;
  font-size: 0.16rem;
  height: 0.34rem;
  line-height: 0.3rem;
  border: 0;
  border-radius: 0.17rem;
  color: #fff;
  background-color: #d8544c;
}
.form-item-btn a {
  display: inline-block;
  margin-right: 0.2rem;
  color: #999;
  border: 1px solid #b7b7b7;
  height: 0.32rem;
  line-height: 0.32rem;
  vertical-align: middle;
  background-color: #fff;
}

/* qq登录 手机登录 */

.other-login {
  display: flex;
  padding: 0 0.1rem;
  margin-top: 0.8rem;
  justify-content: space-around;
}
.other-login i {
  display: block;
  -moz-box-flex: 1;
  -webkit-box-flex: 1;
  box-flex: 1;
  height: 1px;
  background-color: #e1e1e1;
  margin-top: 0.24rem;
}
.other-login a.qq-login {
  background-color: #73c5ff;
  background-image: url(https://w1.hoopchina.com.cn/passport-prod/static/m/2/images/qq.png);
}
.other-login a {
  display: block;
  width: 0.48rem;
  height: 0.48rem;
  border-radius: 0.24rem;
  margin: 0 0.05rem;
  position: relative;
  background-size: 0.16rem 0.18rem;
  background-position: center center;
  background-repeat: no-repeat;
}
.other-login a.phone-login {
  background-color: #48d58e;
  background-image: url(https://w1.hoopchina.com.cn/passport-prod/static/m/2/images/wx_logo.png);
  background-size: 0.12rem 0.18rem;
}
.other-login a span {
  position: absolute;
  color: #999;
  left: 50%;
  top: 0.55rem;
  white-space: nowrap;
  -webkit-transform: translate3d(-50%, 0, 0);
  -moz-transform: translate3d(-50%, 0, 0);
  transform: translate3d(-50%, 0, 0);
}
</style>