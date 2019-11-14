<template>
     <section class="listView">
                <div class="list-view-top">
                    <div class="list-menu">
                        <ul>
                            <router-link tag="li" 
                             :to="'/shouye/'+item.path+'/'+item.type"
                             v-for="(item,index) in sort " :key="index">{{item.text}}</router-link>
                        </ul>
                    </div>
                    <div class="list-submenu">
                        <ul class="clearfix">
                            <router-link tag="li"  :to="'/shouye/'+list.path+'/'+list.channel_type" v-for="(list,index) in category " :key="index">{{list.text}}</router-link>
                        </ul>
                    </div>
                </div>
                <!-- 列表详情 -->
                <router-view></router-view>
            </section>
</template>
<script>
export default {
    name:"list",
    data(){
        return{
            sort:[{
                path:"commend",
                text:"推荐",
                type:""
            },{
                path:"basketball",
                text:"篮球",
                 type:"basketball"
            },{
                path:"running",
                text:"跑步",
                 type:"running"
            },{
                path:"fitness",
                text:"健身",
                 type:"fitness"
            },{
                path:"freestyle",
                text:"潮流",
                type:"freestyle"
            }],
            category:[{
                 path:"quanbu",
                text:"全部", 
                channel_type:""
            },
            {
                 path:"danpin",
                text:"单品推荐", 
                 channel_type:11
            },
            {
                 path:"yuanchuang",
                text:"原创精选", 
                 channel_type:12
            },
            {
                 path:"user",
                text:"用户晒物", 
                 channel_type:7
            }]
        }
    },

}
</script>


<style >
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
.list-view-top .list-menu .active {
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
/* .list-view-top .list-submenu li.on {
    color: #FFF;
    background-color: #FF4338;
} */

</style>