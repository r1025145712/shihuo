<template>
  <div>
    <ul>
      <li @click="home">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-shouye" />
        </svg>
        <span>首页</span>
      </li>
      <li @click="me">
        
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-gengduo" />
        </svg>
        <span>我的</span>
      </li>
    </ul>
  </div>
</template>


<script>
export default {
    methods:{
        home(){
            this.$router.push('/shouye')
        },
        me(){
            this.$router.push('/more')
        }
    }
};
</script>


<style scoped>
    ul{
        width: 1rem;
        height: .6rem;
        background:rgba(0,0,0,.7);
        color:white;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        position: absolute;
        right: .1rem;
        top: .50rem;
    }

    ul li span{
        width: .4rem;
        padding-left: .1rem;
    }
</style>