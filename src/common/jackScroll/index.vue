<template>
    <div class="wrapper" ref="wrapper">
        <slot></slot>
    </div>
</template>


<script>
import BScroll from "better-scroll"

export default {
    name:"JackScroll",
    mounted(){
        new BScroll(this.$refs.wrapper,{
            click:true,
            tab:true
        });
    }
}
</script>


<style scoped>
    .wrapper{
        height: 100%;
      
    }
</style>