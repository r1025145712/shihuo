<template>
  <div class="top_bar">
    <div class="goback" style="display: none;">
      <img
        src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/common/widget/header/head_back_b142dc1.png"
      />
    </div>
    <div class="searchBox focus">
      <form id="searchform" action="#">
        <div class="search">
          <input
            type="search"
            class="input"
            name="search"
            placeholder="搜索全网低价好券"
            id="searchVal"
            v-model="value" 
          />
          <input type="reset" class="reset" value style="display: inline-block;" />
        </div>
      </form>
      <a href="javascript:void(0);" class="cancel" style>取消</a>
    </div>
  </div>
</template>

<script>
  import {search} from '@api/shop'
export default {

  name:"search",
  components: {},
  data() {
    return {
      value:"",
      list:[]
    };
  },
  methods: {},
  watch: {
    async value(newVal){
      let data =await search (newVal);
      console.log(data);
      this.list=data
    }
  },
};
</script>

<style lang="scss" scoped>
.youhuiIndex .top_bar {
    background-color: #f0f3f5!important;
    border: 0!important;
    position: relative;
    z-index: 19!important;
    height: .48rem;
    width: 100%;
    top: 0;
    text-align: center;
}

.youhuiIndex .top_bar .searchBox {
    width: 100%;
    height: 100%;
    left: 0;
    background-color: #f0f3f5!important;
    padding: .064rem .128rem;
    position: absolute;
    z-index: 1;
}

#searchform{
    width: 100%;
    height: .32rem;
}

.youhuiIndex .top_bar .searchBox .search {
    overflow: hidden;
    font-size: .12rem;
    border: 0 none;
    width: 88%;
    height: 100%;
    background: #fff url(http://sh1.hoopchina.com.cn/images/trademobile/search/zoom.png) .05rem center no-repeat;
    background-size: .15rem;
    color: #999;
}

.searchBox .search .input {
    padding: 0 10% 0 9%;
    width: 100%;
    height: .32rem;
    border: 0;
    background: 0 0;
    color: #666;
    font-size: 1.1em;
    outline: 0;
    text-align: left;
    float: left;
    box-sizing: border-box;
}


.searchBox .search input.reset {
    padding: 0;
    margin: 0;
    border: 0;
    width: .26rem;
    height: 100%;
    left: 77%;
    top: 10%;
    height: 80%;
    background: url(http://sh1.hoopchina.com.cn/images/trademobile/search/search_close.png?v=2016092101) center no-repeat;
    background-size: 60%;
    position: absolute;
    right: 0;
    border: 0;
    outline: 0;
}



.searchBox .cancel {
    color: #666;
    font-size: .156rem;
    display: inline-block;
    position: absolute;
    padding-left: .085rem;
    right: .085rem;
    top: .1rem;
}
</style>
