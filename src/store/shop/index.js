import {listApi} from "@api/shop.js";

let state = {
    goodsList: [],
    type:"",
    channel_type:"",
}

let actions = {
   async handleActionsGetGoods({commit},type,channel_type){
    let data = await listApi(type,channel_type);
    console.log(type)
    commit("handleUpdateShop",data.data,type,channel_type)
  }
}

let mutations = {
    handleUpdateShop(state,params,type,channel_type){
        state.type = type;
        state.channel_type = channel_type;
        state.goodsList = params;
        console.log(state.goodsList)
        // sessionStorage.setItem("nm",params.nm);
        // sessionStorage.setItem("cityId",params.id);
    }
}


export default {
    state,
    actions,
    mutations,
    namespaced:true
}