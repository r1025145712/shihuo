<template>      
       <div class="mainBox">
            <TOP/>
            <div class="details">
                 <Swiper/>
            </div>
            <div class="h2">
                <h2>商品名称</h2>
            </div>
            <div class="h3">
                <div class="t1">Air Jordan 3在1987年底上市，由当时还名不见经传的设计师Tinker Ha...</div>
                <div class="t2"><a href="javascript:void(0);" class="more show_app_layer">
                   <span>详情</span>
                    <img src="//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/sports/detail/dt_5edb752.png"></a></div>
            </div>   
        </div>
</template>
<script>
import TOP from "./top"
import Swiper from "./swiper"
export default {
    name:"top",
   components:{
        TOP,
        Swiper
    },
    created(){
        let {img,title}=this.$route.params;
        console.log(img,title)
    }
}
</script>
<style >
.mainBox{
    display: flex;
    flex-direction:column ;
}
.details{
    margin-top:.48rem; 
}
.details .h2{
    font-size: .13rem;
    padding: .04rem .09rem 0
}
.details .h3{
    height: .41rem;
    display: flex;
    flex-direction:column;
    justify-content: space-between;
    align-content: center;
}
.h3 .t1 {
    width: 2.4rem;
    color: #666;
     float: left;
    font-size: .11rem;
    max-height: .325rem;
    text-overflow: ellipsis;
}
    .h3 .t2 {
   display: flex;
   float: left;
    font-size: .1rem;
    width: .6rem;
    margin-left: .2rem;
   
}
  .h3 .t2 a{
      float: right;
       color: #278ccf;
  }
 
    .h3 .t2 img {
    margin-left: .04rem;
     float: right;
    width:.07rem;
}
  
</style>