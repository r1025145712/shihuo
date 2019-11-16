import {listApi} from "@api/shop.js";

let state = {
   goodsList:JSON.parse(sessionStorage.getItem("goodsList")) || [],
    active:(sessionStorage.getItem("index"))||"0",
    active1:(sessionStorage.getItem("index1"))||"0",
    type:(sessionStorage.getItem("nm")) ||"",
    channel_type:(sessionStorage.getItem("tx")) ||"",
}

let actions = {
   async handleActionsGetGoods({commit},arr){
    // console.log(arr)
    let data = await listApi(arr.type,arr.channel_type);
    // console.log(data.data)
    commit("handleUpdateShop",data.data)
  },
  handleIndex({commit},index){
    commit("handleMutations",index)
  },
  handleIndex1({commit},index){
    commit("handleMutations1",index)
  }
}

let mutations = {
    handleUpdateShop(state,params){
        state.goodsList = params;
        // state.goodsList =[...state.goodsList,...params] ;
        sessionStorage.setItem("goodsList",JSON.stringify(state.goodsList))
        sessionStorage.setItem("nm",state.type);
        sessionStorage.setItem("tx",state.channel_type);
        // console.log((sessionStorage.getItem("nm")),(sessionStorage.getItem("tx")))
    },
    handleMutations(state,params){
        state.active=params;
        sessionStorage.setItem("index",params);
        // console.log(state.active)
    },
    handleMutations1(state,params){
        state.active1=params;
        sessionStorage.setItem("index1",params);
        // console.log(state.active1)
    }
}


export default {
    state,
    actions,
    mutations,
    namespaced:true
}