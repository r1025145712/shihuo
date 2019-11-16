<template>

  <div class="list-view">
    <!-- <RScroll ref="scroll"> -->
    <ul>
      <router-link v-for="(item,index) in list" tag="li" :key="index" :to='"/details/"+item.img+"/"+item.title'>
        <a class="link-a clearfix" v-if="item.show_type=='single1'" >
          <div class="imgs">
            <span class="get_imgs">
              <img get="true" class="lazy" :src="item.data.img" />
            </span>
            <!-- <span class="top">置顶</span>  -->
          </div>
          <div class="details_box">
            <h2>{{item.data.title}}</h2>
            <p class="subtitle">{{item.data.subtitle}}</p>
            <div class="from">
              <div class="column_name">
                <span>{{item.data.merchant}}</span>
                &nbsp;{{item.data.price}}
              </div>
            </div>
          </div>
        </a>
        <a class="link-a clearfix" v-else-if="item.show_type=='single3'" href>
          <div class="imgs">
            <span class="get_imgs">
              <img get="true" class="lazy" :src="item.data.img" />
            </span>
            <!-- <span class="top">置顶</span>  -->
          </div>
          <div class="details_box">
            <h2>{{item.data.title}}</h2>
            <p class="desc single3">
              <img src="//sh1.hoopchina.com.cn/images/trademobile/quote_left.png" alt />
              {{item.data.intro}}
              <img
                src="//sh1.hoopchina.com.cn/images/trademobile/quote_right.png"
                alt
              />
            </p>
            <div class="from">
              <div class="price">
                {{item.data.merchant}}&nbsp;
                <span>¥{{item.data.price}}</span>
              </div>
            </div>
          </div>
        </a>
        <a class="link-a clearfix" v-else-if="item.show_type=='single2'" href>
          <div class="imgs">
            <span class="get_imgs">
              <img get="true" class="lazy" :src="item.data.img" />
            </span>
            <!-- <span class="top">置顶</span>  -->
          </div>
          <div class="details_box">
            <h2>{{item.data.title}}</h2>
            <div class="desc face">
              <span>
                <img
                  class="lazy"
                  :src="item.data.avatar"
                  data-original="http://shihuo.hupucdn.com/wx_user/avatar/1546993547/442a937ad5e382f288ab38f28d8bc8ef"
                />
              </span>
              {{item.data.author_name}}
            </div>
            <div class="from">
              <div class="column_name">
                <span>测评档案</span>
              </div>
            </div>
          </div>
        </a>
      </router-link>
    </ul>
      <!-- </RScroll> -->
  </div>

</template>
<script>
import { listApi } from "@api/shop";
import { mapState, mapMutations } from "vuex";
export default {
  name: "list",
  data() {
    return {
      // list: [],
      // type:'',
      // channel_type:""
    };
  },
  created() {
    this.$store.dispatch("shop/handleActionsGetGoods");
    let { type, channel_type } = this.$route.params;
    if (type == "t") {
      this.$store.state.shop.type = "";
    } else {
      this.$store.state.shop.type = type;
    }
    if (channel_type == "q") {
      this.$store.state.shop.channel_type = "";
    } else {
      this.$store.state.shop.channel_type = channel_type;
    }
    this.hanleList(
      this.$store.state.shop.type,
      this.$store.state.shop.channel_type
    );
  },
  computed: {
    ...mapState({
      list: state => state.shop.goodsList,
       type: state => state.shop.type,
         channel_type: state => state.shop.channel_type,
    })
  },
  watch: {
    $route(to, from) {
      let { type, channel_type } = to.params;
      // 单个传输
      if (typeof type == "undefined") {
        this.$store.state.shop.type = this.$store.state.shop.type;
      } else {
        this.$store.state.shop.type = type;
      }
      if (typeof channel_type == "undefined") {
        this.$store.state.shop.channel_type = this.$store.state.shop.channel_type;
      } else {
        this.$store.state.shop.channel_type = channel_type;
      }
      if (type == "t") {
        this.$store.state.shop.type = "";
      }
      if (channel_type == "q") {
        this.$store.state.shop.channel_type = "";
      }
      this.hanleList(
        this.$store.state.shop.type,
        this.$store.state.shop.channel_type
      );
    },
      //  list(){
      //     this.$refs.scroll.handlefinishPullDown();
      //       this.$refs.scroll.handlefinishPullUp();
      // }
  },
  methods: {
    hanleList(type, channel_type) {
      let arr = { type: type, channel_type: channel_type };
      this.$store.dispatch("shop/handleActionsGetGoods", arr);
    }
  },
  //   mounted(){
  //     this.$refs.scroll.handlepullingUp(()=>{
  //         this.hanleList(type, channel_type)
  //     })
  //     this.$refs.scroll.handleScroll();
  // }
};
</script>
<style >
/* 列表 */
.listView {
  display: flex;
  flex-direction: column;
}
.list-view-top {
  background-color: #fff;
  border-bottom: 1px solid #eee;
  width: 100%;
  overflow: hidden;
}
.list-view-top .list-menu {
  height: 0.34rem;
  line-height: 0.34rem;
  padding: 0 0.21rem;
}
.list-view-top .list-menu ul {
  display: flex;
  justify-content: space-between;
}
.list-view-top .list-menu li {
  font-size: 0.13rem;
  font-weight: 700;
  color: #333;
  float: left;
  position: relative;
}
.list-view-top .list-menu li.on {
  color: #ff4338;
}
.list-view-top .list-menu li.on:after {
  content: "";
  width: 0.16rem;
  display: block;
  position: absolute;
  bottom: 0.02rem;
  left: 50%;
  margin-left: -0.08rem;
  border-radius: 0.04rem;
  height: 0.02rem;
  background-color: #ff4338;
}
.list-view-top .list-submenu {
  overflow-x: auto;
  margin-top: 0.05rem;
  padding: 0 0 0.1rem 0.125rem;
}
.list-view-top .list-submenu ul {
  white-space: nowrap;
  display: flex;
  justify-content: space-around;
}
.list-view-top .list-submenu li {
  display: inline-block;
  height: 0.22rem;
  line-height: 0.22rem;
  width: 0.64rem;
  color: #333;
  background-color: #f5f5f5;
  border-radius: 0.04rem;
  font-size: 0.12rem;
  text-align: center;
}
.list-view-top .list-submenu li.on {
  color: #fff;
  background-color: #ff4338;
}
/* 列表详情 */
.list-view {
  background: #fff;
  padding-top: 0.085rem;
  padding-left: 0.085rem;
  width: 100%;
  overflow-y: hidden;
}
.list-view ul > li > a {
  padding: 0.085rem;
  padding-left: 0;
  border-bottom: 1px solid #e6e6e6;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: -moz-flex;
  display: flex;
}
.list-view ul > li > a .imgs {
  width: 30%;
  float: left;
  position: relative;
}
.list-view ul > li > a .imgs .get_imgs {
  width: 100%;
  display: block;
}
.list-view ul > li > a .imgs .get_imgs img {
  width: 100%;
}
.list-view ul > li > a .details_box {
  width: 66%;
  position: relative;
  margin-left: 0.085rem;
  height: 0.96rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.list-view ul > li > a .details_box h2 {
  font-size: 0.14rem Helvetica, sans-serif;
  color: #333;
  font-weight: 400;
  max-height: 0.35rem;
  overflow: hidden;
  word-break: break-all;
  line-height: 0.175rem;
}
.list-view ul > li > a .details_box .subtitle {
  bottom: 0.04rem;
  left: 0;
  font-size: 0.12rem;
  color: #ff4338;
  line-height: 0.02rem;
}

.details_box .desc {
  font-size: 0.11rem;
  color: #666;
}
.details_box .desc img {
  width: 0.075rem;
  display: inline-block;
  margin: 0 0.04rem;
}
.list-view ul > li > a .details_box .from {
  font-size: 0.11rem;
  color: #a4a4a4;
  width: 100%;
  bottom: 0.006rem;
  left: 0;
}
.details_box .from .price {
  float: left;
  color: #999;
  font-size: 0.12rem;
}
.details_box .from .price span {
  color: #ff4338;
}
.details_box .desc.face span {
  display: inline-block;
  border-radius: 0.17rem;
  width: 0.17rem;
  height: 0.17rem;
  overflow: hidden;
  text-align: center;
  vertical-align: middle;
  margin-right: 0.05rem;
}
.details_box .desc.face span img {
  width: 100%;
  display: block;
  margin: 0;
}
.list-view ul > li > a .details_box .from .column_name {
  float: left;
}
</style>