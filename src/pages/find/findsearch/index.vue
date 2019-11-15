<template>
  <div class="block_list clearfix">
    <a href class="list" v-for="(item,index) in arr" :key="index">{{item.name}}</a>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
        arr:[
            {
                name:"众测"
            },
            {
                name:"栏目"
            },
            {
                name:"最新"
            },
            {
                name:"最热"
            },

        ]
    };
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.page-content .block_list {
  width: 100%;
  background: #fff;
  margin-bottom: 0.085rem;
  height: 0.6rem;
}

.page-content .block_list .list {
  width: 25%;
  float: left;
  background-size: 0.31rem 0.265rem;
  text-align: center;
  padding-top: 0.085rem;
  height: 0.6rem;
  font-size: 0.12rem;
  color: #666;
}

.page-content .block_list .list:before {
  background-color: #fff;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  content: "";
  display: block;
  margin: 0 auto 0.06rem;
  width: 0.31rem;
  height: 0.265rem;
}

.page-content .block_list .list:nth-child(1):before {
  background-image: url(http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/find/index/icon-zhongce_65770bc.png);
}

.page-content .block_list .list:nth-child(2):before {
  background-image: url(http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/find/index/icon-huati_624fa93.png);
}

.page-content .block_list .list:nth-child(3):before {
  background-image: url(http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/find/index/icon-new_86b6c1f.png);
}

.page-content .block_list .list:nth-child(4):before {
  background-image: url(http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/find/index/icon-hot_2a01f3a.png);
}
</style>
