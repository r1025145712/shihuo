<template>
  <div>
    <ul class="list">
      <div v-for="(item,index) in damanList" :key="index">
        <li class="item" v-if="item.show_type =='single2'">
          <div class="left">
            <img :src="item.data.img" alt />
          </div>
          <div class="right">
            <p>{{item.data.title}}</p>
            <div>
              <span>
                <img :src="item.data.avatar" alt />
              </span>
              <i>{{item.data.author_name}}</i>
            </div>
          </div>
        </li>
      </div>
    </ul>
  </div>
</template>

<script>
import { basketBall } from "@api/equip";
export default {
  data() {
    return {
      daman: {},
      damanList: []
    };
  },
  created() {
    this.handlerDaman();
  },
  methods: {
    async handlerDaman() {
      let data = await basketBall({
        pageSize: 20,
        param_str: "",
        type: "basketball",
        newsId: "",
        channel_type: 12
      });
      console.log(data);
      this.daman = data;
      this.damanList = data.data;
    }
  }
};
</script>


<style scoped>
.list .item {
  padding: 0.05rem;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-content: center;
}

.list .item .left {
  padding: 0.08rem;
  width: 1.5rem;
  height: 1rem;
}
.list .item .left img {
  width: 100%;
}
.list .item .right {
  padding: 0.08rem;

  width: 100%;
  height: 0.76rem;
}
.list .item .right p {
  width: 100%;
  height: 0.4rem;
}
.list .item .right > div > span {
  width: 0.2rem;
  height: 0.2rem;
  display: inline-block;
  border-radius: 50%;
  overflow: hidden;
}
.list .item .right > div > span img {
  width: 100%;
}
</style>