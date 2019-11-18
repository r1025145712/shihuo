<template>
  <div class="inner" id="searchRelate" style="display: none;">
    <ul>
      <li v-for="(item,index) in list" :key="index"></li>
    </ul>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.search_page #searchRelate {
    background: #fff;
    overflow: hidden;
    position: absolute;
    z-index: 82;
    left: 0;
    top: .405rem;
    width: 100%;
    height: 100%;
}
.search_page #searchRelate li {
    height: .375rem;
    line-height: .375rem;
    padding-left: .085rem;
}
</style>
