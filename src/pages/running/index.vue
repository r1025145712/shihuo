<template>
    <div>
        <Topbar title="跑步专区"></Topbar>
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
      </div>
    </div>
    </div>
</template>


<script>

export default {
    data() {
    return {
      menu: {
        listOne: [
          {
            img: "http://sh1.hoopchina.com.cn/images/trade/app/paobuxie1.png",
            title: "跑步鞋"
          },
          {
            img: "http://sh1.hoopchina.com.cn/images/trade/app/paobufuzhuang2.png",
            title: "跑步上装"
          },
          {
            img: "http://sh1.hoopchina.com.cn/images/trade/app/paobuduanku1.png",
            title: "跑步下装"
          },
          {
            img: "http://sh1.hoopchina.com.cn/images/trade/app/paobupeijian2.png",
            title: "跑步配件"
          },
           {
            img: "http://sh1.hoopchina.com.cn/images/trade/app/paobupeijian2.png",
            title: "运动补给"
          }

        ],
        listTwo: [
          {
            img: "http://sh1.hoopchina.com.cn/images/trade/app/adidas.png",
            title: "adidas"
          },
          {
            img: "http://sh1.hoopchina.com.cn/images/trade/app/asics.png",
            title: "asics"
          },
          {
            img: "http://sh1.hoopchina.com.cn/images/trade/app/NewBalance.png",
            title: "New Balance"
          },
          {
            img: "http://sh1.hoopchina.com.cn/images/trade/app/nike1.png",
            title: "Nike"
          },
          {
            img: "http://sh1.hoopchina.com.cn/images/trade/app/morebrand.png",
            title: ""
          }
        ]
      }
    };
  }
}
</script>


<style scoped>
    .menu_block{
    width: 100%;
    font-size: .1rem;
    padding: .05rem;
    background: #fff;
    
}
.menu_block>ul:nth-child(1){
    width: 100%;
    height: .84rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}

.menu_block>ul:nth-child(1) li{
    width: .60rem;
    height: .66rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
}

.menu_block>ul:nth-child(1) li img{
    width: .60rem;
}


.menu_block>ul:nth-child(2){
    width: 100%;
    height: .6rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}

.menu_block>ul:nth-child(2) li{
    width: .60rem;
    height: .5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
}

.menu_block>ul:nth-child(2) li img{
    width: .60rem;
}

.menu_block>.hosttext{
    width: 100%;
    height: .3rem;


    display: flex;
    justify-content: space-evenly;
    align-items: center;

    text-align: center;
    line-height: .3rem;
}
.menu_block>.hosttext .left{
    width: 30%;
    height: .3rem;
}
.menu_block>.hosttext .right{
    width: 70%;
    height: .3rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;
    line-height: .3rem;
}

.menu_block>.hosttext .right>p{
    width: 35%;height: .3rem;
}
</style>