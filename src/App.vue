<template>
  <div id="app">
    <router-view></router-view>
    <tabBar v-if="$route.meta.tabBarFlag"/>
    <back-top v-back-top v-scroll-show:100='isBackShow' :isShow='isBackShow'></back-top>
  </div>
</template>

<script>
import tabBar from "@/common/tabbar";
import BackTop from "@/common/istop"

export default {

  name:"App",
  data() {
    return {
      isBackShow:{value:false}
    }
  },
  components:{
    tabBar,
<<<<<<< HEAD
    BackTop
=======
>>>>>>> f7abdedc662e7bb71403b2d2a65dfdf6213486e5
  }
}
</script>
<style lang="scss">
  #app{
    height: 100%;
  }
</style>
