<template>
  <section class="mainBox">
    <div class="banner_block">
      <div class="userface">
        <img :src="urlPic?urlPic:pic" alt />
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
          <a class="out" @click="hanleModify">修改资料 &gt;</a>
        </p>
      </div>
    </div>
    <!-- 我的识货 -->
    <div class="menu_list">
      <div class="tit">
        <span>我的识货</span>
      </div>
      <ul>
        <router-link tag="li" to="/collect">
          <a href>
            <img
              src="http://sh1.hoopchina.com.cn/images/trade/app/personal/collect_content.png"
              alt
            />
            <p>我的收藏</p>
          </a>
        </router-link>
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
    <van-dialog v-model="show" title="修改资料" show-cancel-button :beforeClose="beforeClose">
      <div class="form-group">
        <label for="modal_booksAuth">用户昵称</label>
        <input type="text" class="form-control" id="modal_name" v-model="name" ref="modal_name"  placeholder="请输入昵称" />
      </div>
      <div class="tu">
        <img ref="img" :src="urlPic" alt="">
      </div>
      <div class="form-group upload-container">
        <div class="upload">
          <p>上传图片</p>
        </div>
        <input type="file" @change="handleFileChangeCb" name="booksLogo" ref="madal_usersImg" id="madal_usersImg" class="bookImg" />
      </div>
    </van-dialog>
  </section>
</template>

<script>
import Vue from "vue";
import { Toast } from "vant";
import { Dialog } from "vant";
import { modifyApi ,modify1Api} from "@api/shop";
Vue.use(Toast);
Vue.use(Dialog);
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
      name: "",
      id: "",
      urlPic: "",
      show: false,
      pic:"http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/user/head_02977e3.png"
    };
  },
  
  methods: {
    hanleIf(data) {
      if (data.name == "") {
        this.box = true;
      } else {
        this.box = false;
        this.name = sessionStorage.getItem("name");
        this.id =sessionStorage.getItem("id");
        this.urlPic = sessionStorage.getItem("urlPic");
      }
    },
    hanleOut() {
      sessionStorage.removeItem("user");
      Toast.success("已退出");
    },
    hanleModify() {
      this.show = !this.show;
    },
    handleFileChangeCb() {
        //ajax模拟form表单上传
        let formData = new FormData();
        //设置上传的文件以及文件的字段
        formData.append("booksLogo", this.$refs.madal_usersImg.files[0]);
        this.handleFileModify(formData)
    },
    async handleFileModify(formData) {
      let data = await modifyApi(formData);
      if (data.data.urlImage) {
             this.$refs.img.src= data.data.urlImage;
             this.urlPic=data.data.urlImage;
      }
    },
   beforeClose(action, done) {
      if(action === 'confirm') {
          this.hanleModify1(this.name,this.urlPic,this.id)
          // setTimeout(done, 1000)
         
           done() //关闭
      } else if(action === 'cancel') {
         done() //关闭
      }
    },
     async hanleModify1(name,img,id) {
      let data = await modify1Api(name,img,id);
       if (data.data.status == 1) {
            sessionStorage.setItem("name",this.name);
            sessionStorage.setItem("urlPic",this.urlPic);
              Toast.success(data.data.info);
        } else {
            Toast.fail(data.data.info);
        }
    
    },
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
  background: url(//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/user/level_1_c8e5252.png)
    no-repeat;
  background-size: 100%;
  display: inline-block;
  width: 0.21rem;
  height: 0.15rem;
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
  font-size: 0.12rem;
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
/* 修改 */
.upload-container {
  position: relative;
  display: flex;
    padding: 0 .05rem;
}
.upload {
  width: 80px;
  height: 34px;
  border: 1px solid #337ab7;
  border-radius: 4px;
  font-size: 14px;
  line-height: 34px;
  cursor: pointer;
}
.upload p {
  width: 80px;
  height: 34px;
  padding: 0;
  text-align: center;
  line-height: 34px;
}
input[type="file"] {
  display: block;
}

.bookImg {
  opacity: 0;
  position: absolute;
}
.form-group {
    margin-bottom: 15px;
    padding: .05rem .05rem;
}
label {
    display: inline-block;
    max-width: 100%;
    margin-bottom: 5px;
    font-weight: 700;
}
.tu{
  width: .8rem;
  height: .8rem;
  border: 1px solid #ccc;
  border-radius:.8rem; 
   margin: .05rem .05rem;
}
.tu img{
  width: 100%;
  height: 100%;
   border-radius:.8rem; 
}
.form-control {
    display: block;
    width: 100%;
    height: 34px;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857143;
    color: #555;
    background-color: #fff;
    background-image: none;
    border: 1px solid #ccc;
    border-radius: 4px;
    -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
    box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
    -webkit-transition: border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;
    -o-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
    transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
}
</style>