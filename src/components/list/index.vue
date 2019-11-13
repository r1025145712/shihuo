<template>
  <div class="list-view">
    <ul>
      <li v-for="(item,index) in list" :key="index">
        <a class="link-a clearfix" href>
          <div class="imgs">
            <span class="get_imgs">
              <img
                get="true"
                class="lazy"
                :src="item.data.img"
              />
            </span>
            <!-- <span class="top">置顶</span>  -->
          </div>
          <div class="details_box">
            <h2>{{item.data.title}}</h2>
            <p class="subtitle">{{item.data.subtitle}}</p>
            <div class="from">
              <div class="column_name">
                <span>{{item.data.merchant}}</span>&nbsp;{{item.data.price}}
              </div>
            </div>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
import { listApi } from "@api/shop";
import { mapState ,mapMutations} from "vuex";
export default {
  name: "list",
    data() {
    return {
      // list: [],
      type:'',
      channel_type:""
    };
  },
  created(){
    this.$store.dispatch("shop/handleActionsGetGoods")
    console.log(this.$route.params)
        let {type,channel_type} = this.$route.params;
        this.type = type;
        this.channel_type = channel_type;
    this.hanleList(this.type,this.channel_type);
  },
  computed:{
    ...mapState({
      list:state=>state.shop.goodsList,
      type:state=>state.shop.type,
      channel_type:state=>state.shop.channel_type,
    })
  },
    watch:{
        "$route"(to,from){
            console.log(to)
           let {type,channel_type} = to.params;
            this.type = type;
            this.channel_type = channel_type;
            this.hanleList(this.type,this.channel_type);
        }
  },
  methods:{
    hanleList(type,channel_type){
      console.log(type,channel_type)
       this.$store.dispatch("shop/handleActionsGetGoods", type,channel_type);
    }
  },

  // methods: {
  //   async hanleList(type) {
  //     let data = await listApi(type);
  //     this.list = data.data;
  //     document.title=this.$route.meta.title;
      
  //   }
  // }
};
</script>
<style >
/* 列表 */
.listView{
    display: flex;
    flex-direction:column ;
}
.list-view-top {
    background-color: #FFF;
    border-bottom: 1px solid #eee;
    width: 100%;
    overflow: hidden;
}
.list-view-top .list-menu {
    height: .34rem;
    line-height:  .34rem;
    padding: 0 .21rem;
}
.list-view-top .list-menu ul {
    display: flex;
    justify-content: space-between;
}
.list-view-top .list-menu li {
    font-size: .13rem;
    font-weight: 700;
    color: #333;
    float: left;
    position: relative;
}
.list-view-top .list-menu li.on {
    color: #FF4338;
}
.list-view-top .list-menu li.on:after {
    content: "";
    width: .16rem;
    display: block;
    position: absolute;
    bottom: .02rem;
    left: 50%;
    margin-left: -0.08rem;
    border-radius: .04rem;
    height: .02rem;
    background-color: #FF4338;
}
.list-view-top .list-submenu {
    overflow-x: auto;
    margin-top:.05rem;
    padding: 0 0 .1rem .125rem ;
}
.list-view-top .list-submenu ul {
    white-space: nowrap;
    display: flex;
    justify-content: space-around;
}
.list-view-top .list-submenu li {
    display: inline-block;
    height: .22rem;
    line-height: .22rem;
    width: .64rem;
    color: #333;
    background-color: #f5f5f5;
    border-radius: .04rem;
    font-size: .12rem;
    text-align: center;
}
.list-view-top .list-submenu li.on {
    color: #FFF;
    background-color: #FF4338;
}
/* 列表详情 */
.list-view {
    background: #fff;
    padding-top: .085rem;
    padding-left: .085rem;
    width: 100%;
    overflow-y: hidden;
}
.list-view ul>li>a {
    padding: .085rem;
    padding-left: 0;
    border-bottom: 1px solid #e6e6e6;
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: -moz-flex;
    display: flex;
}
.list-view ul>li>a .imgs {
    width: 30%;
    float: left;
    position: relative;
}
.list-view ul>li>a .imgs .get_imgs {
    width: 100%;
    display: block;
}
.list-view ul>li>a .imgs .get_imgs img {
    width: 100%;
}
.list-view ul>li>a .details_box {
    width: 66%;
    position: relative;
    margin-left: .085rem;
    height: .96rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.list-view ul>li>a .details_box h2 {
    font-size: .14rem Helvetica,sans-serif;;
    color: #333;
    font-weight: 400;
    max-height: .35rem;
    overflow: hidden;
    word-break: break-all;
    line-height: .175rem;
}
.list-view ul>li>a .details_box .subtitle {
    bottom: .04rem;
    left: 0;
    font-size: .12rem;
    color: #FF4338;
    line-height: .02rem;
}
.list-view ul>li>a .details_box .from {
    font-size: .11rem;
    color: #a4a4a4;
    width: 100%;
    bottom: .006rem;
    left: 0;
}
.list-view ul>li>a .details_box .from .column_name {
    float: left;
}
</style>