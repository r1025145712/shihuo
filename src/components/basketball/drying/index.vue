<template>
  <div>
    <ul class="list-da">
      <li class="item">
        <div class="left">
          <img
            src="http://shihuo.hupucdn.com/ucditor/20191112/752x567_c9ba84d05b058724bae4b3b7af58f50e.jpeg?imageView2/0/w/600/h/600/interlace/1"
            alt
          />
        </div>
        <div class="right">
          <p>球鞋评测丨安踏活动抽奖——KT5水晶球上脚测评</p>
          <div>
            <span>
              <img
                src="http://shihuo.hupucdn.com/wx_user/avatar/1546993547/442a937ad5e382f288ab38f28d8bc8ef"
                alt
              />
            </span>
            搬运军推荐
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>


<style scoped>
.list-da .item {
  padding: 0.05rem;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-content: center;
}

.list-da .item .left {
  padding: 0.08rem;
  width: 1.5rem;
  height: 1rem;
}
.list-da .item .left img {
  width: 100%;
}
.list-da .item .right {
  padding: 0.08rem;

  width: 100%;
  height: 0.76rem;
}
.list-da .item .right p {
  width: 100%;
  height: 0.4rem;
}
.list-da .item .right > div > span {
  width: 0.2rem;
  height: 0.2rem;
  display: inline-block;
  border-radius: 50%;
  overflow: hidden;
}
.list-da .item .right > div > span img {
  width: 100%;
}
</style>