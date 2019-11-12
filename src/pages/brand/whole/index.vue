<template>
  <div class="list-block">
    <h2>
      <span></span>最新上架
      <span></span>
    </h2>
    <p class="tit-block tit-block0">
      <a href>
        adidas/阿迪达斯
        <span>不止5折</span>
      </a>
    </p>
    <ul class="list-shop">
      <li>
        <a href="#">
          <div class="imgs">
            <img
              src="http://shihuo.hupucdn.com/ucditor/20180910/720x720_51fe97c4db402b09e7cc20beafc895c3.jpeg?imageMogr2/format/jpg"
              class="lazy"
            />
          </div>
          <div class="tit">adidas 三叶草 FORUM LO 男子 经典鞋 G25812 如图 44.5</div>
          <div class="price">
            &nbsp;¥
            <span>580</span>
          </div>
        </a>
      </li>
      <li>
        <a href="#">
          <div class="imgs">
            <img
              src="http://shihuo.hupucdn.com/ucditor/20180910/720x720_51fe97c4db402b09e7cc20beafc895c3.jpeg?imageMogr2/format/jpg"
              class="lazy"
            />
          </div>
          <div class="tit">adidas 三叶草 FORUM LO 男子 经典鞋 G25812 如图 44.5</div>
          <div class="price">
            &nbsp;¥
            <span>580</span>
          </div>
        </a>
      </li>
      <li>
        <a href="#">
          <div class="imgs">
            <img
              src="http://shihuo.hupucdn.com/ucditor/20180910/720x720_51fe97c4db402b09e7cc20beafc895c3.jpeg?imageMogr2/format/jpg"
              class="lazy"
            />
          </div>
          <div class="tit">adidas 三叶草 FORUM LO 男子 经典鞋 G25812 如图 44.5</div>
          <div class="price">
            &nbsp;¥
            <span>580</span>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
    name:"whole",
    data(){
        return {
            
        }
    }
    



};
</script>
<style scoped>
.brandsale .list-block {
    padding: 0 .06rem;
    background-color: #fff;
    margin-bottom: .10rem;
    width: 100%;
    display: flex;
    flex-direction:column ;

}
.brandsale .new h2 {
    height:0.4rem;
    line-height: .40rem;
    font-size: .14rem;
    text-align: center;
}
.brandsale .new h2 span {
    border-top: 1px solid #dedede;
    width: .15rem;
    display: inline-block;
    vertical-align: middle;
    margin: 0 .10rem;
}
.brandsale .list-block .tit-block {
    text-align: center;
    height: .40rem;
    line-height: .40rem;
    font-size: .14rem;
    font-weight: 700;
    margin-top:-.14rem ;
}
.brandsale .list-block  a {
    display: block;
    color: #333;
}
.brandsale .list-block  span {
    color: #dd1712;
    padding-left: .10rem;
    padding-right: .10rem;
    font-weight: 400;
}
/* 商品 */
.list-shop{
    display: flex;
    justify-content: space-around;
}
.brandsale .list-block li {
    padding: 0 .06rem;
    padding-bottom: .12rem;
    width: 33.33%;
    text-align: center;
}
.imgs{
    width: .90rem;
    height: .90rem;
}
.imgs img{
    width: 100%;
}
.brandsale .list-block li .tit {
    color: #333;
    font-size: .13rem ;
    width: 100%;
    overflow: hidden;
    height: .28rem;
    line-height: .28rem;
}
.brandsale .list-block li .price {
    text-align: center;
    color: #dd1712;
    font-size: .13rem;
}
</style>