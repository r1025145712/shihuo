<template>
  <div ref="broadwise">
      <slot></slot>
  </div>
</template>

<script>

import BScroll from "better-scroll";

export default {
    name:"X",
    mounted() {
        new BScroll(this.$refs.broadwise,{
            startX: 0,  
            click: true,
            scrollX: true,
            scrollY: false,
            // eventPassthrough: 'vertical'
          });
    },
};
</script>

<style lang="scss" scoped>



</style>
