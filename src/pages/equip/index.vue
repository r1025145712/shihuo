<template>
  <div>
    <div class="page" ref="page">
       <Head/>
       <Nav/>
       <Main/>
       
    </div>
  </div>
</template>

<script>
import Head from "./head";
import Nav from "./nav";
import Main from "./main";
export default {
  name: "equip",
  components:{
    Head,Nav,Main
  },
  created() {
    
    document.title = this.$route.meta.title;
  },
  
};


</script>

<style  scoped>
html {
  font-size: 31.25vw;
  width: 100%;
  height: 100%;
  /* overflow: hidden; */
}
body {
  widows: 100%;
  height: 100%;
  font-size: 0.12rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.page {
  width: 100%;
  height: 100%;
  padding-bottom:.5rem;
  overflow: scroll;
}


</style>