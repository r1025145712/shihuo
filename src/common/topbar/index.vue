<template>
  <div>
    <div class="top-bar" >
      <div class="goback" @click = "handlerGoToBack">
        <img
          src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/common/widget/header/head_back_b142dc1.png"
          alt
        />
      </div>
      <div class="title">{{title}}</div>
      <div class="list" @click="toggle">
        <img
          src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/common/widget/header/head_list_4a4f511.png"
          alt
        />
      </div>
      
    </div>
    <User v-if="flag"></User>
  </div>
</template>


<script>
import User from "./user.vue"

export default {
  name: "Topbar",
  data(){
      return {
          flag:0
      }
  },
  props:{
      title:{
          type:String,
          default:"default"
      }
  },
  components:{
      User
  },
  methods:{
      handlerGoToBack(){
          this.$router.back()
      },
      toggle(){
          this.flag = !this.flag;
      }
  }
};
</script>

<style >
.top-bar {
  width: 100%;
  height: 0.4rem;
  background: #eee;

  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}

.main {
  flex: 1;
  width: 100%;
  height: 100%;
  overflow: scroll;
  background: #eee;
}

.top-bar .goback,
.top-bar .list {
  width: 0.4rem;
  height: 0.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.top-bar .goback img,
.top-bar .list img {
  width: 0.3rem;
  height: 0.3rem;
}
.top-bar .title {
  flex: 1;
  height: 0.4rem;
  text-align: center;
  line-height: 0.4rem;
  font-size: 0.16rem;
  font-weight: bold;
}
</style>