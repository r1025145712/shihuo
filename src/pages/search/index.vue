<template>
  <div class="mainBox indexpage">
    <div class="youhuiIndex">
      <div class="top_bar" >
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
                @click="click"
              />
              <input type="reset" class="reset" value @click="dianjia" />
            </div>
          </form>
          <router-link tag="a" to="/preferential" class="cancel">取消</router-link>  
        </div>
      </div>
      <div id="search-page" class="search_page youhui_index">
        <div class="inner" id="searchWrapper">
          <dl>
            <dt>热门搜索</dt>
            <dd class="sear_hot">
              <a href="http://www.shihuo.cn/column/362.html#qk=rs">618</a>
              <a href="http://www.shihuo.cn/youhui/522576.html#qk=rs">红包</a>
              <a href="http:/search/searchResult/news?keywords=AJ11#qk=rs">AJ11</a>
              <a href="http:/search/searchResult/news?keywords=欧文4#qk=rs">欧文4</a>
              <a href="http:search/searchResult/news?keywords=LBJ15#qk=rs">LBJ15</a>
              <a href="http:/search/searchResult/news?keywords=ultra boost#qk=rs">ultra boost</a>
              <a href="http:/search/searchResult/news?keywords=Jordan#qk=rs">Jordan</a>
              <a href="http:/search/searchResult/news?keywords=Air force 1#qk=rs">Air force 1</a>
              <a href="http:/search/searchResult/news?keywords=球鞋90秒#qk=rs">球鞋90秒</a>
              <a href="http:/search/searchResult/news?keywords=React#qk=rs">React</a>
            </dd>
            <dt class="his">历史搜索</dt>
            <dd class="sear_record clearfix">
              <ul class="his"></ul>
            </dd>
            <dd>
              <p class="clear_history his">
                <a href="javascript:void(0);" id="clear_history">清空历史记录</a>
              </p>
            </dd>
          </dl>
        </div>
      </div>
      <div class="inner" id="searchRelate" v-show="isShow">
        <ul>
          <li v-for="(item,index) in list" :key="index">
            <router-link tag="a"  @click.native="to">{{item}}</router-link>
            <!-- :to="'/search/searchResult/new/'+item" -->
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { search } from "@api/shop";
// import searchcenter from '../search/searchcenter'
export default {
  name: "search",

  data() {
    return {
      isShow:false,
      value: "",
      list: []

      //   resdata: []
    };
  },
  methods: {
      click(){
          this.isShow=true
      },
      dianjia(){
          this.isShow=false
      },
      to(){
          this.item
          console.log(this.item)
      }
      
  },
  watch: {
    async value(newVal) {
      let data = await search(newVal);
      console.log(data.data);
      this.list = data.data;
    //   if(this.list=''){
    //       this.isShow=false
    //   }
    }
  }
};
</script>

<style lang="scss" scoped>
.mainBox.indexpage {
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding-bottom: 0.4rem;
}

.youhuiIndex {
  width: 100%;
  height: 100%;
  padding-bottom: 0.4rem;
  display: flex;
  flex-direction: column;
  /* overflow: hidden;
    overflow-y:auto; */
}

//top

.youhuiIndex .top_bar {
  background-color: #f0f3f5 !important;
  border: 0 !important;
  position: relative;
  z-index: 19 !important;
  height: 0.48rem;
  width: 100%;
  top: 0;
  text-align: center;
}

.youhuiIndex .top_bar .searchBox {
  width: 100%;
  height: 100%;
  left: 0;
  background-color: #f0f3f5 !important;
  padding: 0.064rem 0.128rem;
  position: absolute;
  z-index: 1;
}

#searchform {
  width: 100%;
  height: 0.32rem;
}

.youhuiIndex .top_bar .searchBox .search {
  overflow: hidden;
  font-size: 0.12rem;
  border: 0 none;
  width: 88%;
  height: 100%;
  background: #fff
    url(http://sh1.hoopchina.com.cn/images/trademobile/search/zoom.png) 0.05rem
    center no-repeat;
  background-size: 0.15rem;
  color: #999;
}

.searchBox .search .input {
  padding: 0 0 0 9%;
  width: 100%;
  height: 0.32rem;
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
  width: 0.26rem;
  height: 100%;
  left: 77%;
  top: 10%;
  height: .3rem;
//   background-color: ;
  background: url(http://sh1.hoopchina.com.cn/images/trademobile/search/search_close.png?v=2016092101)
    center no-repeat #fff;
  background-size: 60%;
  position: absolute;
  top: .07rem;
  right: 0;
  border: 0;
  outline: 0;
}

.searchBox .cancel {
  color: #666;
  font-size: 0.156rem;
  display: flex;
  align-items: center;
    height: 100%;
  position: absolute;
  padding-left: 0.085rem;
  right: 0.085rem;
  top: 0rem;
}

//center

.search_page {
  background: #fff;
  position: fixed;
  top: 0;
  width: 100%;
  height: 120%;
  padding-top: 0.48rem;
  overflow-y: scroll;
  z-index: 9;
}

.search_page #searchWrapper {
  width: 100%;
  background: #fff;
  position: absolute;
  z-index: 81;
  left: 0;
  // top: .81rem;
}

.search_page dl {
  background: #fff;
  padding: 0.085rem;
  padding-right: 0;
  padding-bottom: 0;
}

.search_page dl dt {
  font-size: 0.12rem;
  color: #999;
  margin-bottom: 0.085rem;
}

.search_page dl .sear_hot {
  margin-bottom: 0.04rem;
}

.search_page dl .sear_hot a {
  font-size: 0.12rem;
  display: inline-block;
  margin-right: 0.02rem;
  margin-bottom: 0.085rem;
  border: 0.01rem solid #aeaeae;
  color: #444;
  padding: 0.04rem;
  border-radius: 0.03rem;
  text-decoration: none;
}

.search_page .clear_history {
  margin: 0.085rem auto;
  text-align: center;
}

.search_page .clear_history a {
  display: inline-block;
  font-size: 0.12rem;
  color: #ff4338;
  border-radius: 0.04rem;
  height: 0.33rem;
  line-height: 0.33rem;
  text-align: center;
  border: 0.01rem solid #ececec;
  width: 1.68rem;
  background: #fff;
}

//底部
#searchRelate {
  background: #fff;
  overflow: hidden;
  position: absolute;
  z-index: 82;
  left: 0;
  top: 0.48rem;
  width: 100%;
  height: 100%;
}
#searchRelate li {
  height: 0.375rem;
  line-height: 0.375rem;
  padding-left: 0.085rem;
  background: #fff;
}

#searchRelate li a {
  display: block;
  color: #444;
  font-size: 0.128rem;
  border-bottom: 0.005rem solid #e6e6e6;
  width: 100%;
  height: 100%;
}
</style>
