<template>
<div>
  <div style="height:300px"></div>

  <div class="searchBar" id="searchBar">
    <ul  :class="searchBarFixed == true ? 'isFixed' :''">
      <li>区域</li>
      <li>价格</li>
      <li>房型</li>
      <li>更多</li>
    </ul>
  </div>
  <div style="height:1000px"></div>
</div>
</template>

<script>
export default {
    data () {
      return {
        searchBarFixed:false
      }
    },
    mounted () {
      window.addEventListener('scroll', this.handleScroll)
      window.ontouchmove = this.handleScroll;
    },
    methods:{
      handleScroll () {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;//网页被卷起来的高度
        var offsetTop = document.querySelector('#searchBar').offsetTop;//距离顶部的高度
        // console.log(scrollTop)
        // console.log(offsetTop)
        if (scrollTop > offsetTop) {
          this.searchBarFixed = true
        } else {
          this.searchBarFixed = false
        }
        // console.log(this.searchBarFixed)
      },
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  },
}
</script>

<style lang="scss">

.searchBar{
  .isFixed{
    position:fixed;
    background-color:#Fff;
    top:0;
    z-index:999;
    border-top: none;
  }
  ul {
    WIDTH:100%;
    height: .60rem;
    line-height: .60rem;
    display: flex;
    li {
     font-size: .24rem;
      text-align: center;
      flex: 1;
      i {
        font-size: 0.2rem;
        padding-left: .55rem;
        color: #ccc;
      }
    }
    border-bottom: 1px solid #ddd;
    border-top: 1px solid #ddd;
  }
}
</style>
