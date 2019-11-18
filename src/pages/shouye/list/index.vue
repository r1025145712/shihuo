<template>
  <section class="listView">
    <div class="list-view-top">
      <div class="list-menu">
        <ul>
            <li
            :class="{active: active == index}"
            @click="hanleClick(index)"
            v-for="(list,index) in sort "
            :key="index"
          >{{list.text}}</li>
           
        </ul>
      </div>
      <div class="list-submenu">
        <ul class="clearfix">
            <!-- <router-link
            tag="li"
            :to="'/shouye/'+item.path+'/'+item.channel_type"
            v-for="(item,index) in category "
            :key="index"
          >{{item.text}}</router-link> -->
           <li
            :class="{active1: active1 == index}"
            @click="hanleClick1(index)"
            v-for="(item,index) in category "
            :key="index"
          >{{item.text}}</li>
        </ul>
      </div>
    </div>
    <!-- 列表详情 -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </section>
</template>
<script>
import { mapState ,mapMutations} from "vuex";
export default {
  name: "list",
  data() {
    return {
      sort: [
        {
          path: "commend",
          text: "推荐",
          type: "t"
        },
        {
          path: "commend",
          text: "篮球",
          type: "basketball"
        },
        {
          path: "commend",
          text: "跑步",
          type: "running"
        },
        {
          path: "commend",
          text: "健身",
          type: "fitness"
        },
        {
          path: "commend",
          text: "潮流",
          type: "freestyle"
        }
      ],
      category: [
        {
          path: "quanbu",
          text: "全部",
          channel_type: "q"
        },
        {
          path: "quanbu",
          text: "单品推荐",
          channel_type: 11
        },
        {
          path: "quanbu",
          text: "原创精选",
          channel_type: 12
        },
        {
          path: "quanbu",
          text: "用户晒物",
          channel_type: 7
        }
      ]
    };
  },
   computed:{
    ...mapState({
      active:state=>state.shop.active,
       active1:state=>state.shop.active1,
    })
  },
  methods: {
     
    hanleClick(index) {
       this.$store.dispatch("shop/handleIndex",index);
      this.$router.push({
        //编程时导航
        path:'/shouye/'+this.sort[index].path+'/'+this.sort[index].type
      });
    },
      hanleClick1(index) {
       this.$store.dispatch("shop/handleIndex1",index);
        this.$router.push({
        //编程时导航
        path:'/shouye/'+this.category[index].path+'/'+this.category[index].channel_type
      });
    }
  }
};
</script>


<style >
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
.list-view-top .list-menu .active {
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
.list-view-top .list-submenu .active1 {
  color: #fff;
  background-color: #ff4338;
}
</style>