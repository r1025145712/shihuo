<template>
   <section class="mainBox">
        <div class="banner_block">
            <div class="userface">
                <img src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/user/head_02977e3.png" alt="">
            </div>
            <div class="login">
                <router-link to="/register" tag="a">登录</router-link>
                <a href="">注册</a>
                <p class="jb">金币 0</p>
            </div>
        </div>
        <!-- 我的识货 -->
        <div class="menu_list">
            <div class="tit"><span>我的识货</span></div>
            <ul>
                <li><a href="">
                        <img src="http://sh1.hoopchina.com.cn/images/trade/app/personal/collect_content.png" alt="">
                        <p>我的收藏</p>
                    </a></li>
                <li><a href="">
                        <img src="http://sh1.hoopchina.com.cn/images/trade/app/personal/my_shaiwu.png" alt="">
                        <p>我的晒物</p>
                    </a></li>
                <li><a href="">
                        <img src="http://sh1.hoopchina.com.cn/images/trade/app/personal/kaiquan.png" alt="">
                        <p>我的礼品</p>
                    </a></li>
            </ul>
        </div>
        <!-- 识货必备 -->
        <div class="menu_list">
            <div class="tit"><span>识货必备</span></div>
            <ul>
                <li><a href="">
                        <img src="http://sh1.hoopchina.com.cn/images/trade/app/personal/tuijiandianpu.png" alt="">
                        <p>推荐店铺</p>
                    </a></li>
                <li><a href="">
                        <img src="http://sh1.hoopchina.com.cn/images/trade/app/personal/select_shoe.png" alt="">
                        <p>黑科技选鞋</p>
                    </a></li>
            </ul>
        </div>
    </section>
</template>

<script>
export default {
     name:"more",
        created(){
         document.title = this.$route.meta.title
    }, 
}
</script>

<style  scoped>
  .mainBox{
    width: 100%;
    display: flex;
    flex-direction: column;
    height: 100%;
}
.banner_block {
    width: 100%;
    height: 1.28rem;
    background: url(http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/user/bg_912a95a.png) top no-repeat;
    background-size: 100% auto;
    font-family: Helvetica,sans-serif;
}
.banner_block .userface {
    width: .425rem;
    height:.425rem;
    margin-top: .6rem;
    overflow: hidden;
    border-radius: 50%;
    margin-left:.21rem;
    box-shadow: 0 0 30px rgba(255,255,255,.5);
    float: left;
}
.banner_block .userface img {
    width: 100%;
    height: 100%;
}
.banner_block .login {
    padding-left: .21rem ;
    width: 75%;
    float: left;
    margin-top:.64rem;
    font-size: .14rem ;
    color: #fff;
}
.banner_block .login a {
    color: #fff;
    font-size: .15rem;
    margin-right: .085rem;
}
.banner_block .jb {
    margin-top: .04rem;
    font-size: .12rem;
}
/* 我的识货 */
.menu_list {
    padding: .06rem;
    background: #fff;
    margin-bottom: .09rem;
}
.menu_list .tit {
    font-size: .14rem;
    color: #333;
    background: url(http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/user/border_88b19b4.png) left center repeat-x;
    background-size: .02rem;
}
.menu_list .tit span {
    background: #fff;
    padding: 0 .05rem;

}
.menu_list ul { 
    display: flex;
    align-items: center;
}
.menu_list ul li {
    width: 25%;
    text-align: center;
    color: #333;
    font-size: .12rem;
    margin: .09rem 0;
    position: relative;
  
}
.menu_list ul li a{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.menu_list ul li a img {
    width: .38rem;
    margin-bottom:0.1rem ;
}
</style>