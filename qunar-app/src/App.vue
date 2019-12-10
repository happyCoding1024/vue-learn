<!--
 router-view 显示的当前路由地址下的内容，它会根据当前用户
 请求的地址，到 router下的index.js下根据路径去找到底去显示哪一个组件。
-->
<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
</style>
