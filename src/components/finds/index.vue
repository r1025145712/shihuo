<template>
  <div class="jingxList">
    <ul id="jingxList">
      <li  v-for="(item,index) in list" :key="index">
        <div class="author">
          <a href="javascript:void(0);" class="face">
            <img :src="item.avater" />
          </a>
          <div class="nameM">
            <p class="name">{{item.author_name}}</p>
            <p class="time">{{item.data}}</p>
          </div>
        </div>
        <div class="content">
          <a href>
            <div class="tit">{{item.title}}</div>
            <p class="imgOne">
              <img :src="item.img" class="lazy" />
            </p>
            <div class="tags">
              <span class="like">{{item.praise}}</span>
              <span class="say">{{item.reply_count}}</span>
            </div>
          </a>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { finds } from "../../api/shop";
export default {
  name: "finds",

  components: {},
  data() {
    return {
      list: [],
      id: "",
    };
    console.log(id)
  },
  created() {
    let { id } = this.$route.params;
    this.id = id;
    this.hanleList(this.id);
  },
  watch: {
    $route(to, from) {
      let { id } = to.params;
      this.id = id;
      this.hanleList(this.id);
    }
  },
  methods: {
    async hanleList(id) {
      let data = await finds(id);
      this.list = data.data;
    }
  }
};
</script>

<style lang="scss" scoped>
/* 第四部分  第二部分 */

.page-content .topBlock .jingxList {
  padding-left: 0.085rem;
  padding-bottom: 0.17rem;
  width: 100%;
  height: 7.5rem;
}

#jingxList {
  width: 100%;
  height: 100%;
}

.page-content .topBlock .jingxList li {
  border-bottom: 1px solid #e6e6e6;
  padding: 0.17rem 0.17rem 0.17rem 0;
}

.author {
  width: 100%;
  height: 0.535rem;
}

.page-content .topBlock .jingxList li .author .face {
  width: 0.29rem;
  height: 0.29rem;
  float: left;
  border-radius: 0.29rem;
  overflow: hidden;
  margin-right: 0.085rem;
}

.page-content .topBlock .jingxList li .author .face img {
  display: block;
  width: 100%;
}

.nameM {
  width: 100%;
  height: 0.535rem;
}

.page-content .topBlock .jingxList li .author .nameM .name {
  color: #444;
  font-size: 0.2rem;
  height: 0.275rem;
}

.page-content .topBlock .jingxList li .author .nameM .time {
  color: #999;
  font-size: 0.18rem;
  height: 0.26rem;
}

.page-content .topBlock .jingxList li .content {
  font-size: 0.15rem;
  color: #222;
  margin-left: 0.375rem;
}

.page-content .topBlock .jingxList li .content .imgOne {
  margin: 0.085rem 0;
  height: 1.27rem;
}

.page-content .topBlock .jingxList li .content .imgOne img {
  width: 100%;
}

.page-content .topBlock .jingxList li .content .tags .like {
  background: url(http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/find/index/like_537e53f.png)
    left center no-repeat;
  padding-left: 0.1875rem;
  background-size: 0.145rem auto;
  height: 0.145rem;
  display: inline-block;
  color: #a4a4a4;
  margin-right: 0.085rem;
  line-height: 0.145rem;
}

.page-content .topBlock .jingxList li .content .tags .say {
  background: url(http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/find/index/say_348570f.png)
    left center no-repeat;
  padding-left: 0.1875rem;
  background-size: 0.145rem auto;
  line-height: 0.145rem;
  height: 0.145rem;
  display: inline-block;
  color: #a4a4a4;
}
</style>
