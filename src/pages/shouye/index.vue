<template>
    <div>
       <Head/>
       <Part/>
    </div>
</template>

<script>
import Head from "./header"
import Part from "./part"
export default {
    name:"shouye",
     created(){
         document.title = this.$route.meta.title
    }, 
    components:{
        Head,
        Part
    }
}
</script>

<style lang="stylus" scoped>

</style>