<script setup>
// 通用字体
import 'vfonts/Lato.css'
// 等宽字体
import 'vfonts/FiraCode.css'
import Head from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>
<template>
  <Head></Head>
  <router-view> </router-view>
  <Footer></Footer>
</template>

<style lang="scss">
@import '@/assets/style/main.scss';
</style>
