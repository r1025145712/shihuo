<template>
    <div>
        <div class="tj-area">
            <p>最新推荐</p>
            <div class="clearfix">
                <div class="imgs"><img src="http://shihuoproxy.hupucdn.com/aHR0cDovL3NoaWh1by5odXB1Y2RuLmNvbS9nb29kcy8yMDE3MDkvMDgxNi9hNjUyNDYyZTUyNWY4ZDgyMjhjZDBlODk5MWE4NDFmNS5qcGc?imageView2/0/w/300/h/300/interlace/1" alt=""></div>
               
                <div class="txt-area">
                    <div class="title">Nike Run Swift</div>
                    <div class="txt">经典的黑白配色，简约大气。</div>
                    <div class="price">
                        <div class="t1">淘宝
                            <s>¥253.00</s>
                        </div>
                        <div class="t2">
                            <img src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/index/icon-2_2bc8bc4.png" alt="">
                            <span>1623017451</span>
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
    </div>
</template>


<script>
export default {
    name:"Main"

}
</script>


<style scoped>

.tj-area .clearfix{
    
    height: 1.4rem;
    padding:.05rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: .01rem solid #ccc;
}
.tj-area .clearfix .imgs{
    width: 1.1rem;
    height: 1.1rem;
    margin-left: .1rem;
}
.tj-area .clearfix .imgs img{
    width: 1.1rem;
    height: 1.1rem;
} 
.tj-area .clearfix .txt-area{
    position: relative;
    height: 1.1rem;
    width: 2rem;
   flex: 1;
    
   
   
}

.tj-area>.clearfix>.txt-area>div:first-child{
    font-size: .16rem;
    height: .4rem;
    overflow: hidden;
    padding-left: .1rem;
   
}


.tj-area>.clearfix>.txt-area>div:nth-child(2){

    height: .4rem;
    font-size: .1rem;
    padding-left: .1rem;
}
.tj-area>.clearfix>.txt-area>div:nth-child(3){
    width: 2rem;
    height: .3rem;
    line-height: .3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: .1rem;
}
.tj-area>.clearfix>.txt-area>div:nth-child(3) .t1 s{
    text-decoration: none;
    font-weight: bold;
    color: chocolate;
}

.tj-area>.clearfix>.txt-area>div:nth-child(3) .t2{
    padding-right: .1rem;
}
.tj-area>.clearfix>.txt-area>div:nth-child(3) .t2 span{
    display: inline-block
}
.tj-area>.clearfix>.txt-area>div:nth-child(3) .t2 img{
    width: .1rem;
    display: inline-block
    
}
</style>