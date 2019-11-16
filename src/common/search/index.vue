<template>
  <div class="ser">
    <div class="top">
      <div class="back" @click="back">
        <img
          src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/common/widget/header/head_back_b142dc1.png"
          alt
        />
      </div>
      <div class="search">
        <input type="text" v-model="inputVal" :placeholder="defalut" />
      </div>
    </div>

    <ul class="searchList" @click="getGood($event)" v-show="flag" >
      <li v-for="(item,index) in list" :key="index">{{item}}</li>
    </ul>
  </div>
</template>

<script>
import { search, searchClassName } from "@api/equip";
export default {
  name:"Search",
  data() {
    return {
    defalut:"请输入关键字",
      flag: false,
      inputVal: "",
      goodClassName: "",
      list: []
    };
  },
  watch: {
    async inputVal() {
        
      let data = await search({ keywords: this.inputVal });
      this.list = data.data;
      console.log(this.list);
      this.flag = true;
    }
  },
  methods: {
    async getGood(e) {
        
      if (e.target.tagName !== "LI") return;
      this.goodClassName = e.target.textContent;

      let data = await searchClassName({
        page: 1,
        page_size: 30,
        type: "goods",
        keywords: this.goodClassName
      });
      if (data) {
          this.inputVal ="";
        this.defalut = this.goodClassName;
        this.flag = false;
      }
      this.$emit("handler",data)
      console.log(data);
      
    },
    back(){
        this.$router.push("/shouye")
    }
  }
};
</script>

<style scoped>

.top {
  position: fixed;
  width: 100%;
  height: 0.4rem;
  background: #ccc;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.top .back {
  width: 0.4rem;
  height: 0.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.top .back img {
  width: 0.3rem;
  height: 0.3rem;
}

.top .search {
  flex: 1;
}
.top .search input {
  width: 2.5rem;
  height: 0.3rem;
  font-size: 0.14rem;
  border-radius: 0.2rem;
  padding-left: 0.2rem;
}

.searchList {
  padding: .4rem 0.2rem 0 0.2rem;
}
.searchList li {
  height: 0.3rem;
  border-bottom: 1px solid #ccc;
  line-height: 0.3rem;
}
</style>