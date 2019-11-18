<template>
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
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.search_page {
    background: #fff;
    position: fixed;
    top: 0;
    width: 100%;
    height: 120%;
    padding-top: .48rem;
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
    padding: .085rem;
    padding-right: 0;
    padding-bottom: 0;
}

.search_page dl dt {
    font-size: .12rem;
    color: #999;
    margin-bottom: .085rem;
}

.search_page dl .sear_hot {
    margin-bottom: .04rem;
}

.search_page dl .sear_hot a {
    font-size: .12rem;
    display: inline-block;
    margin-right: .02rem;
    margin-bottom: .085rem;
    border: .01rem solid #aeaeae;
    color: #444;
    padding: .04rem;
    border-radius: .03rem;
    text-decoration: none;
}



.search_page .clear_history {
    margin: .085rem auto;
    text-align: center;
}

.search_page .clear_history a {
    display: inline-block;
    font-size: .12rem;
    color: #FF4338;
    border-radius: .04rem;
    height: .33rem;
    line-height: .33rem;
    text-align: center;
    border: .01rem solid #ECECEC;
    width: 1.68rem;
    background: #fff;
}

</style>
