<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li
        v-for="item of recommendList"
        class="item border-bottom"
        :key="item.id"
      >
        <img
          class='item-img'
          :src="item.imgUrl"
        >
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommed',
  data() {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: '//imgs.qunarzz.com/p/p70/1809/e7/4941057a6aae702.jpg_256x160_9fee6ccb.jpg',
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
  .item
    overflow: hidden
    display: flex
    height: 1.9rem
    .item-img
      width: 1.7rem
      height: 1.7rem
      padding: .1rem
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
      .item-button
        line-height: .44rem
        margin-top: .16rem
        background: #ff9300
        padding: 0 .2rem
        border-radius: .06rem
        color: #fff

</style>
