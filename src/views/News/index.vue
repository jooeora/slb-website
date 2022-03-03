<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { newsList } from './news'

// 生命周期
onMounted(() => {
  handleImgSrc()
})

// 图片路径
const imgUrl = ref('')
const handleImgSrc = async () => {
  //  banner
  let m = await import('@/assets/images/Finance.jpeg')

  imgUrl.value = {
    banner1: m.default
  }
}

// 路由
const router = useRouter()
const goPage = (page = '/') => {
  console.log('go home')
  router.push({ path: '/' })
}
</script>
<template>
  <div class="main">
    <!-- banner -->
    <n-carousel :space-between="20" draggable>
      <img class="carousel-img" :src="imgUrl.banner1" />
    </n-carousel>
    <div class="max-width content">
      <n-breadcrumb>
        <n-breadcrumb-item @click="goPage('/')"> 首页 </n-breadcrumb-item>
        <n-breadcrumb-item> 关于我们-新闻动态 </n-breadcrumb-item>
      </n-breadcrumb>
    </div>

    <div>
      <div class="max-width content" v-for="item in newsList" :key="item.id">
        <div class="title">{{ item.title }}</div>
        <div class="date">
          <span>{{ item.date }}</span>
          <span>{{ item.user }}</span>
        </div>
        <n-ellipsis line-clamp="3" :tooltip="false"> {{ item.content }} </n-ellipsis>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main {
  overflow: hidden;
  background-color: rgba(204, 204, 204, 0.15);
  .carousel-img {
    width: 100%;
    height: 240px;
    object-fit: cover;
  }
  .content {
    width: 100%;
    margin: 20px auto;
    background-color: white;
    padding: 20px;
    border-radius: 6px;
    cursor: pointer;
    &:hover {
      background-color: rgba(0, 188, 150, 0.05);
    }
    .title {
      font-size: 22px;
      position: relative;
      padding-bottom: 5px;
      &::after {
        content: '';
        width: 100%;
        height: 2px;
        border-radius: 2px;
        background-color: rgba(0, 188, 150, 0.9);
        position: absolute;
        bottom: 0;
        left: 0;
        display: inline-block;
        z-index: 3;
      }
      &::before {
        content: '';
        width: 100%;
        height: 2px;
        border-radius: 2px;
        background-color: rgba(196, 196, 196, 0.1);
        position: absolute;
        bottom: 0;
        left: 0;
        display: inline-block;
        z-index: 2;
      }
    }
    .date {
      padding: 5px 0;
      span {
        margin-right: 20px;
        color: rgba(0, 188, 150, 0.9);
      }
    }
    .n-ellipsis {
      font-size: 16px;
      text-align: justify;
      color: #666;
    }
  }
}
</style>
