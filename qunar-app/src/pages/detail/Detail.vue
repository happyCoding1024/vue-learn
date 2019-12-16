<template>
  <div>
    <detail-banner
      :sightName="sightName"
      :bannerImg="bannerImg"
      :gallaryImgs="gallaryImgs"
    >
    </detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :list="categoryList"></detail-list>
    </div>
  </div>
</template>

<script>
import DetailBanner from './components/banner';
import DetailHeader from './components/header';
import DetailList from './components/list';
import axios from 'axios';

export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList,
  },
  data() {
    return {
      categoryList: [],
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
    }
  },
  methods: {
    getDetailInfo() {
      // 实现在发送请求的同时将id也传给后端
      axios.get('api/detail.json', {
        params: {
          id: this.$route.params.id,
        }
      }).then(this.getDetailInfoSucc);
    },
    getDetailInfoSucc(res) {
      let res_temp = res.data.data;
      if (res.ret) {
        this.categoryList = res_temp.categoryList;
        this.sightName = res_temp.sightName;
        this.bannerImg = res_temp.bannerImg;
        this.gallaryImgs = res_temp.gallaryImgs;
      }
    },
  },
  mounted() {
    this.getDetailInfo();
  }
}
</script>

<style lang="stylus" scoped>
  .content
    height: 50rem

</style>