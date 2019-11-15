<template>
    <div class="bscroll" ref="bscroll">
        <slot></slot>
    </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
    name:"RScroll",
    mounted(){
        new  BScroll(this.$refs.bscroll)
        
    },
    methods:{
         handlepullingDown(callback) {
            this.scroll.on("pullingDown", () => {
                callback();
            });
        },

        //上拉加载更多

        handlepullingUp(callback){
            this.scroll.on('pullingUp'),()=>{
                callback();
            }
        }






    }
}
</script>
<style >
  
</style>