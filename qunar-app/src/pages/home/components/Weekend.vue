<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li
        v-for="item of list"
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
  props: {
    list: Array,
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
