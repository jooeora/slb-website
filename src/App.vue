<script setup>
import Head from './components/Header.vue'
</script>
<template>
  <Head></Head>
  <router-view id="app" v-wechat-title="$route.meta.title"></router-view>
</template>

<style>
@import '@/assets/style/main.scss';
#app {
  width: 100vw;
  height: 100vh;
  overflow: auto;
}
</style>
