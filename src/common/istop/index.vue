<template>
  <div class="back-top" v-show='isShow.value'>
    <span></span>
  </div>
</template>
<script>
export default {
  props: ['isShow']
}
</script>
<style lang="scss" scoped>
.back-top{
  display: flex;
  align-items:center;
  height: .36rem;
  width: .36rem;
  border-radius: .18rem;
  // z-index: 999;
  background:#fff
}
.back-top > span {
  display: inline-block;
  width: .36rem;
  height: .36rem;
  background-image: url(http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/common/widget/header/top_11d5d37.png);
  background-repeat: no-repeat;
  background-size: .36rem;
}
.back-top > span {
  color: #333;
  padding-left:0.5rem;
}
.back-top {
  position: fixed;
  right: .1rem;
  bottom: .6rem;
}
</style>