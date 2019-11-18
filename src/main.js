import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'
import VueTouch from 'vue-touch'
import "@common/filter"
import "@common/components"
import "@common/index.js"

Vue.config.productionTip = false;


// 自定义指令实现back-top;
Vue.directive('scroll-show',{
  inserted(el,binding){
    let scope = binding.arg || '200';
    window.addEventListener('scroll',function(e){
      if(this.scrollY > Number(scope)){
        binding.value.value = true;
      }else{
        binding.value.value = false;
      }
    })
  }
})
Vue.directive('back-top',{
  inserted(el,binding){
    let e = binding.arg || 'click';
    el.addEventListener(e,function(){
      let scrollToptimer = setInterval(function(){
        let top = document.documentElement.scrollTop + document.body.scrollTop;
        let speed = top/4;
        top -= speed;
        document.documentElement.scrollTop = document.body.scrollTop = top;
        if(top == 0){
          clearInterval(scrollToptimer);
        }
      },30)
    })
  }
})




Vue.config.productionTip = false
Vue.use(VueTouch,{name:"v-touch"});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')









