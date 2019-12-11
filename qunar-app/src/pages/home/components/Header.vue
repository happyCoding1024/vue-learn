<template>
  <div class="header">
    <div class="header-left">返回</div>
    <div class="header-input">内容</div>
    <div class="header-right">城市</div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
};
</script>

<style lang="stylus" scoped>
  .header
    display: flex
    background: #00bcd4
    line-height: .86em;
    color: #fff
    .header-left
      width: .64rem
      float: left
    .header-input
      flex: 1
    .head-right
      width: 1.24rem
      float: right
      text-align: center
      color: red
</style>
