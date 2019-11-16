<template>
    <div>
        <div class="search">
            <div class="search-box">
                <span class="iconfont iconxingtaiduICON_sousuo--"></span>
                <input type="text" placeholder="搜索全网低价好券" @click= "search">
            </div>
            <div class="user"><img src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/widget/header/head_list_4a4f511.png" alt=""></div>
        </div>
        
        <ul class="text">
            <li v-for="(item,index) in text" :key="index" ><a href="">{{item}}</a></li>           
        </ul> 

    </div>
</template>


<script>
export default {
    name:"Head",
    data(){
        return{
            text:["热销排行","好价精选","当季新款"]
        }
    },
    methods: {
        search(){
           this.$router.push("/searchshop")
        }
    },

}
</script>


<style scoped>
    /* serch */
.search{
    height: .4rem;
    width: 100%;
    padding-bottom:.1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #eee;
    padding: 0 .1rem;
}
.search .search-box{
    padding: 0 .1rem;
    width: 2.7rem;
    height: .23rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f7f7f7;

}
.search .search-box>.iconfont{
    padding-left: .02rem;
    font-size: .25rem;
}
.search .search-box input{
    width: 2.43rem;
    outline: none;
    background: #f7f7f7;
    font-size: .04rem;
    border: none;
}
.search .user{
    width: .32rem;
    height: .36rem;
    display: flex;
    justify-content: center;
    align-items: center;
    
}
.search .user img{
    width: .32rem;
    height: .32rem;
}


/* text */
.text{
    width: 100%;
    height: .8rem;   
}

.text li{
    width: 33%;
    height: .5rem;
    border-right: 1px solid #ccc;
    display: list-item;
    text-align: center;
    float: left;
    margin-top: 0.15rem;  
    font-size: .18rem; 
}
.text li:nth-child(3){
    border: none;
}
.text li a:before{
    height: .3rem;
    width: .3rem;
    content:"";
    display: block;
    font-size: .18rem;
   
    margin: 0 auto .02rem;
}
.text li a{
    display: block;
    color: black;
}

.text li:nth-child(1) a:before{
    height: .3rem;
    width: .3rem;
    content:"";
    display: block;
    font-size: .18rem;
    background: url(http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/index/zhuangbei-index-menu-1_f79f337.png) no-repeat center center transparent;
    background-size: contain;
    margin: 0 auto .02rem;
}
.text li:nth-child(2) a:before{
    height: .2rem;
    width: .2rem;
    content:"";
    display: block;
    font-size: .18rem;
    background: url(http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/index/zhuangbei-index-menu-2_4b3ef21.png) no-repeat center center transparent;
    background-size: contain;
    margin: .05rem auto .07rem;
}
.text li:nth-child(3) a:before{
    height: .2rem;
    width: .2rem;
    content:"";
    display: block;
    font-size: .18rem;
    background: url(http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/index/zhuangbei-index-menu-3_680282c.png) no-repeat center center transparent;
    background-size: contain;
    margin: .05rem auto .07rem;

}
</style>