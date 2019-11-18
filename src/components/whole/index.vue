<template>
<RScroll ref="scroll">
  <div>
    <div class="list-block" v-for="(item,index) in brandList" :key="index">
      <h2>
        <span></span>最新上架<span></span>
      </h2>
      <p class="tit-block tit-block0">
        <a href>
          {{item.title}}
          <span>{{item.subtitle}}</span>
        </a>
      </p>
      <ul class="list-shop">
        <li :id="value.id" v-for="(value,index) in brandList[index].goods_info" :key="index">
          <a href="#">
            <div class="imgs">
              <img
                :src="value.img"
                class="lazy"
              />
            </div>
            <div class="tit">{{value.title}}</div>
            <div class="price">
              &nbsp;¥
              <span>{{value.price}}</span>
            </div>
          </a>
        </li>  
      </ul>
    </div>
  </div>
  </RScroll>
</template>
<script>
import { brandApi } from "@api/shop";
export default {
  name: "whole",
  data() {
    return {
      brandList: [],
      id:''
    };
  },
  created(){
        let {id} = this.$route.params;
        this.id = id;
    this.hanleBrandList(this.id);
  },
  watch:{
        "$route"(to,from){
            // console.log(to)
           let {id} = to.params;
            this.id = id;
            this.hanleBrandList(this.id);
        },
      brandList(){
          this.$refs.scroll.handlefinishPullDown();
            this.$refs.scroll.handlefinishPullUp();
      }
        
  },
  methods: {
    async hanleBrandList(r,p,sign) {
      let data = await brandApi(r,p);
      if(sign){
          this.brandList =[...this.brandList,...data.data.newDate] ;
      }else{
         this.brandList =[...data.data.newDate] ;
      }
      document.title=this.$route.meta.title;
      
    }
  },
  mounted(){
    console.log(this.$refs.scroll)
  }
};
</script>
<style scoped>
.brandsale .list-block {
  padding: 0 0.06rem;
  background-color: #fff;
  margin-bottom: 0.1rem;
  width: 100%;
  display: flex;
  flex-direction: column;
}
.brandsale .new h2 {
  height: 0.4rem;
  line-height: 0.4rem;
  font-size: 0.14rem;
  text-align: center;
}
.brandsale .new h2 span {
  border-top: 1px solid #dedede;
  width: 0.15rem;
  display: inline-block;
  vertical-align: middle;
  margin: 0 0.1rem;
}
.brandsale .list-block .tit-block {
  text-align: center;
  height: 0.4rem;
  line-height: 0.4rem;
  font-size: 0.14rem;
  font-weight: 700;
  margin-top: -0.14rem;
}
.brandsale .list-block a {
  display: block;
  color: #333;
}
.brandsale .list-block span {
  color: #dd1712;
  padding-left: 0.1rem;
  padding-right: 0.1rem;
  font-weight: 400;
}
/* 商品 */
.list-shop {
  display: flex;
  justify-content: space-around;
}
.brandsale .list-block li {
  padding: 0 0.06rem;
  padding-bottom: 0.12rem;
  width: 33.33%;
  text-align: center;
}
.imgs {
  width: 0.9rem;
  height: 0.9rem;
}
.imgs img {
  width: 100%;
}
.brandsale .list-block li .tit {
  color: #333;
  font-size: 0.13rem;
  width: 100%;
  overflow: hidden;
  height: 0.28rem;
  line-height: 0.28rem;
}
.brandsale .list-block li .price {
  text-align: center;
  color: #dd1712;
  font-size: 0.13rem;
}
</style>