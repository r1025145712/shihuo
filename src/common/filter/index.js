import Vue from "vue";

Vue.filter("toImg",(url,offset)=>{
    url = url+"?imageslim|imageView2/1/w/400/h/400";
    return url.replace(/w\.h/,offset)
})