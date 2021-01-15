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
@import "./assets/css/main.css";
</style>
