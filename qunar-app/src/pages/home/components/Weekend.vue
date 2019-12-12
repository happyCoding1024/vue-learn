<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li
        v-for="item of recommendList"
        class="item border-bottom"
        :key="item.id"
      >
        <div class="item-img-wrapper">
          <img
            class='item-img'
            :src="item.imgUrl"
          >
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data() {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: '//img1.qunarzz.com/sight/p0/1511/d4/d4dac814152be2090.water.jpg_600x330_16dce79d.jpg',
        title: '大连圣亚海洋世界',
        desc: '浪漫大连首站，浪漫的海洋主题乐园',
      }, {
        id: '0002',
        imgUrl: '//imgs.qunarzz.com/p/p70/1809/e7/4941057a6aae702.jpg_256x160_9fee6ccb.jpg',
        title: '大连圣亚海洋世界',
        desc: '浪漫大连首站，浪漫的海洋主题乐园',
      }, {
        id: '0003',
        imgUrl: '//imgs.qunarzz.com/p/p70/1809/e7/4941057a6aae702.jpg_256x160_9fee6ccb.jpg',
        title: '大连圣亚海洋世界',
        desc: '浪漫大连首站，浪漫的海洋主题乐园',
      }, {
        id: '0004',
        imgUrl: '//imgs.qunarzz.com/p/p70/1809/e7/4941057a6aae702.jpg_256x160_9fee6ccb.jpg',
        title: '大连圣亚海洋世界',
        desc: '浪漫大连首站，浪漫的海洋主题乐园',
      }, {
        id: '0005',
        imgUrl: '//imgs.qunarzz.com/p/p70/1809/e7/4941057a6aae702.jpg_256x160_9fee6ccb.jpg',
        title: '大连圣亚海洋世界',
        desc: '浪漫大连首站，浪漫的海洋主题乐园',
      }],
    };
  },
};
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .title
    margin-top: .2rem
    line-height: .8rem
    background: #eee
    text-indent: .2rem
  .item-img-wrapper
    overflow: hidden
    .item-img
      height: 2.14rem
      width: 8.4rem
  .item-info
    flex: 1
    padding: .1rem
    min-width: 0
    .item-title
      line-height: .54rem
      font-size: .32rem
      ellipse()
    .item-desc
      line-height: .4rem
      color: #ccc
      ellipse()
</style>
