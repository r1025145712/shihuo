<template>
    <div class="mainBox  indexpage">
        <section class="page-content">
          <Findtop/>
          <Findsearch/>
          <Findhot/>        
          <Findfind/>
        </section>
    </div>
</template>


<script>
import Findtop from "../find/findtop";
import Findsearch from "../find/findsearch";
import Findhot from "../find/findhot";
import Findfind from "../find/findfind";

export default {
  name:"find",
  components:{
    Findtop,
    Findhot,
    Findsearch,
    Findfind,
  },
      created(){
  
         document.title = this.$route.meta.title

    }, 
}
</script>

<style lang="scss" scoped>


.flexibile-model .mainBox.indexpage {
    width: 100%;
    height: 100%;
    overflow: hidden;
    padding-bottom: .4rem;
}

.page-content {
    -webkit-font-smoothing: antialiased;
    width: 100%;
    height: 100%;
}




</style>

<!-- 吸顶
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
-->

<!-- 
  // 吸顶
  <div>
  <div style="height:300px; background:red"></div>

  <div class="searchBar" id="searchBar">
    <ul  :class="searchBarFixed == true ? 'isFixed' :''">
      <li>区域</li>
      <li>价格</li>
      <li>房型</li>
      <li>更多</li>
    </ul>
  </div>
  <div style="height:1000px; background:yellow"></div>
</div> 
style
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
}-->