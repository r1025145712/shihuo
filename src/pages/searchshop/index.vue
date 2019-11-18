<template>
  <div>
    <Search @handler="getData"></Search>
    <div class="fix"></div>
    <div class="goodlist">
      <div class="good" v-for="(item,index) in data" :key="index" @click="toDetail(item)">
          <img :src="item.pic" alt="">
        <p>{{item.name}}</p>
        <p>{{item.intro}}</p>
        <p><span>￥179{{item.price}}</span>起</p>
      </div>
     
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            data:""
        }
    },
  methods: {
    getData(params) {
      console.log(params);
      this.data= params.data.list;
    },
    toDetail(data) {
      console.log(1111,data);
      this.$router.push({
        name: "detail",
        params: {
          title: data.name,
          img: data.pic,
          intro: data.intro,
          price:data.goodsPrice
        }
      });
    }
  }
};
</script>

<style scoped>

.goodlist{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-content: space-around;
}
.good {
  width: 1.5rem;
  height: 2rem;
  margin-bottom: .2rem;
}

.good img{
    width: 1.5rem;
    height: 1.2rem;
    display: block;
}
.good p{
    margin-top: .1rem;
}
.good p:nth-child(2){
    
    white-space: nowrap;
    width: 1.15rem;
    overflow: hidden;
    font-weight: bold;
}

.good p:nth-child(3){
    
    white-space: nowrap;
    width: 1.15rem;
    overflow: hidden;
    font-size: .05rem;
}
.good p:nth-child(4) span{
    
    font-size: .1rem;
    color: red;
}
</style>
