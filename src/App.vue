<template>
  <div id="app">
    <router-view></router-view>
    <tabBar v-if="$route.meta.tabBarFlag"/>
  </div>
</template>

<script>
import tabBar from "@/common/tabbar"
export default {

  name:"App",
  components:{
    tabBar,
  }
}
</script>
<style lang="scss">
  #app{
    height: 100%;
  }
</style>
