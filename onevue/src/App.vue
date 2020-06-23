<template>
  <div id="app">
    <router-view></router-view>
    <!-- <transition mode="out-in">
      <keep-alive>
        <router-view keep v-if="$route.meta.isApp&&$route.meta.keepAlive" />
      </keep-alive>
    </transition>
    <transition mode="out-in">
      <router-view v-if="$route.meta.isApp&&!$route.meta.keepAlive" />
    </transition>
    <router-view v-if="!$route.meta.isApp" />-->
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
html,
body {
  padding: 0;
  margin: 0;
  height: 100%;
  /* background-color: #f7f7f7 */
}
#app {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", 微软雅黑, Tahoma,
    Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  height: 100%;
  font-size: 14px;
  color: #333;
  position: relative;
}
.el-loading-spinner .el-icon-loading {
  font-size: 30px;
}
</style>
