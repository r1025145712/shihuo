<template>
  <div>
    <Topbar title="篮球专区" :backPath="'/shouye'"></Topbar>
    <div class="main">
      <div class="menu_block">
        <ul>
          <li v-for="(item,index) in menu.listOne" :key="index">
            <p>
              <img :src="item.img" alt />
            </p>
            <p>{{item.title}}</p>
          </li>
        </ul>
        <ul>
          <li v-for="(item,index) in menu.listTwo" :key="index">
            <p>
              <img :src="item.img" alt />
            </p>
            <p>{{item.title}}</p>
          </li>
        </ul>

        <div class="hosttext">
          <div class="left">HOTTEXT</div>
          <div class="right">
            <P>球鞋百科知多少</P>
            <P>乔丹北斗科技芯</P>
          </div>
        </div>


       
        <div class="list-view-top">
          <ul>
            <router-link
              :to="item.path"
              tag="li"
              v-for="(item,index) in list "
              :key="index"
            >{{item.title}}</router-link>
          </ul>
        </div>

        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  // created(){
  //   if(/^\/basketball/.test(this.$route.path)){
  //     this.back = "/shouye";

  //   }

  // },
  // updated(){
  //   if(/^\/basketball/.test(this.$route.path)){
  //     this.back = "/shouye";
  //   }

  // },

  data() {
    return {
      back: "",
      menu: {
        listOne: [
          {
            img: "http://sh1.hoopchina.com.cn/images/trade/app/lanqiuxie2.png",
            title: "篮球鞋"
          },
          {
            img: "http://sh1.hoopchina.com.cn/images/trade/app/qiuyi2.png",
            title: "篮球上装"
          },
          {
            img: "http://sh1.hoopchina.com.cn/images/trade/app/qiuku2.png",
            title: "篮球下装"
          },
          {
            img: "http://sh1.hoopchina.com.cn/images/trade/app/lanqiuhuju1.png",
            title: "篮球配件"
          },
          {
            img: "http://sh1.hoopchina.com.cn/images/trade/app/lanqiu2.png",
            title: "篮球"
          }
        ],
        listTwo: [
          {
            img: "http://sh1.hoopchina.com.cn/images/trade/app/Jordan.png",
            title: "Jordan"
          },
          {
            img: "http://sh1.hoopchina.com.cn/images/trade/app/adidas.png",
            title: "adidas"
          },
          {
            img: "http://sh1.hoopchina.com.cn/images/trade/app/nike1.png",
            title: "Nike"
          },
          {
            img: "http://sh1.hoopchina.com.cn/images/trade/app/ua.png",
            title: "UA"
          },
          {
            img: "http://sh1.hoopchina.com.cn/images/trade/app/morebrand.png",
            title: "全部"
          }
        ]
      },
      list: [
        {
          title: "全部",
          path: "/basketball/all"
        },
        {
          title: "单品推荐",
          path: "/basketball/single"
        },
        {
          title: "达人清单",
          path: "/basketball/daman"
        },
        {
          title: "用户晒物",
          path: "/basketball/drying"
        }
      ]
    };
  }
};
</script>


<style scoped>
.main {
  padding-top: 0.4rem;
}
.menu_block {
  width: 100%;
  font-size: 0.1rem;
  padding: 0.05rem;
  background: #fff;
}
.menu_block > ul:nth-child(1) {
  width: 100%;
  height: 0.84rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.menu_block > ul:nth-child(1) li {
  width: 0.6rem;
  height: 0.66rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}

.menu_block > ul:nth-child(1) li img {
  width: 0.6rem;
}

.menu_block > ul:nth-child(2) {
  width: 100%;
  height: 0.6rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.menu_block > ul:nth-child(2) li {
  width: 0.6rem;
  height: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}

.menu_block > ul:nth-child(2) li img {
  width: 0.6rem;
}

.menu_block > .hosttext {
  width: 100%;
  height: 0.3rem;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  text-align: center;
  line-height: 0.3rem;
}
.menu_block > .hosttext .left {
  width: 30%;
  height: 0.3rem;
}
.menu_block > .hosttext .right {
  width: 70%;
  height: 0.3rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  line-height: 0.3rem;
}

.menu_block > .hosttext .right > p {
  width: 35%;
  height: 0.3rem;
}

.list-view-top {
  width: 100%;
  height: 0.3rem;
}

.list-view-top ul {
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: space-around;
  align-items: center;
}

.list-view-top ul li {
  width: 25%;
  text-align: center;
  font-size: 0.1rem;
  font-weight: bold;
}

</style>