<template>
  <div class="headBox">
    <div class="search_bar">
      <form
        action
        id="searchBox"
        method="get"
        class="searchBox"
        style="background: rgba(221, 23, 18, 0);"
      >
        <div class="search_box">
          <div class="search">
            <input
              type="text"
              class="input"
              name="keywords"
              value
              placeholder="搜索商品，品牌"
              id="searchVal"
            />
            <input type="reset" class="sh_searchClear" title="重置搜索词" style="display: none;" />
          </div>
          <a href="javascript:void(0);" class="me">
            <img
              src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/homefis/widget/header/me_0442d1d.png"
              alt
            />
          </a>
        </div>
      </form>
    </div>
    <div class="page_banner">
      <div class="hd">
        <ul>
          <li class>1</li>
          <li class>2</li>
          <li class="on">3</li>
          <li class>4</li>
          <li class>5</li>
        </ul>
      </div>
      <img
        src="http://shihuo.hupucdn.com/appHome/201901/0810/e3e9e3e19c8ac46b699f554b3aca7538.jpg?imageView2/2/w/750/h/380/interlace/1"
        alt
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "index-head"
};
</script>

<style  scoped>
.headBox{
  
}
.search_bar {
  width: 100%;
  height: 0.39rem;
  overflow: hidden;
  position: absolute;
  top: 0;
  z-index: 10;
  border: 0;
}

.search_bar .searchBox {
  width: 100%;
  overflow: hidden;
  height: 0.39rem;
}

.search_bar .searchBox .search_box {
  width: 100%;
  overflow: hidden;
  height: 100%;
}

.search_bar .searchBox .search_box .search {
  width: 85%;
  float: left;
  padding-left: 0.085rem;
  position: relative;
  box-sizing: border-box;
}

.search_bar .searchBox .search_box .search .input {
  width: 100%;
  box-sizing: border-box;
  border-radius: 0.025rem;
  height: 0.26rem;
  margin: 0.06rem 0;
  border: 0;
  padding-left: 0.18rem;
  color: #666;
  border: 1px solid #ccc;
  font-size: 0.08rem;
  background: #fff
    url("http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/homefis/widget/header/search_0b8e800.png")
    0.06rem center no-repeat;
  background-size: 0.1rem;
  overflow: hidden;
}

.search_bar .searchBox .search_box .me {
  display: flex;
  float: right;
  width: 15%;
  height: 0.39rem;
  justify-content: center;
  align-items: center;
}

.search_bar .searchBox .search_box .me img {
  width: 0.25rem;
  height: 0.25rem;
}


/* 轮播图 */
.page_banner{
    width: 100%;
    height: 1.6rem;
    position: relative;
}
.page_banner img{
    width: 100%;
    height: 100%;
}
.page_banner .hd {
    position: absolute;
    height: .085rem;
    right: .08rem;
    bottom: .08rem;
    z-index: 1;
}
.page_banner .hd ul li {
    background: rgba(255,255,255,.4);
    display: block;
    width: .08rem;
    height: .08rem;
    border-radius: .08rem;
    text-indent: -9999px;
    font-size: 0;
    overflow: hidden;
    margin: 0 .025rem;
    float: left;
}
.page_banner .hd ul .on{
    background: #fff ;
}

</style>