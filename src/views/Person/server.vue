<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

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
        <n-breadcrumb-item> 个人金融-个人产品与服务 </n-breadcrumb-item>
      </n-breadcrumb>
    </div>
    <div class="max-width content">
      <div class="cont">
        <div class="title">账户开立</div>
        <ul class="list">
          <li>目前为个人提供吉郎和美元活期结算账户</li>
        </ul>
      </div>
      <div class="cont">
        <div class="title">现金服务</div>
        <ul class="list">
          <li>存取款</li>
          <li>吉郎/美元 货币兑换</li>
        </ul>
      </div>
      <div class="cont">
        <div class="title">个人支票</div>
        <ul class="list">
          <li>目前为个人提供吉郎和美元支票，仅限吉布提国内使用</li>
        </ul>
      </div>
      <div class="cont">
        <div class="title">货币兑换</div>
        <ul class="list">
          <li>吉郎/美元 现金兑换</li>
          <li>吉郎/美元 账户兑换</li>
        </ul>
      </div>
      <div class="cont">
        <div class="title">支付转账</div>
        <ul class="list">
          <li>仅限吉布提国内</li>
        </ul>
      </div>
      <div class="cont">
        <div class="title">国际汇款</div>
        <ul class="list">
          <li>目前提供美元国际汇款</li>
        </ul>
      </div>
      <div class="cont">
        <div class="title">信贷服务</div>
        <ul class="list">
          <!-- <li>目前提供美元国际汇款</li> -->
        </ul>
      </div>
      <div class="cont">
        <div class="title">投资理财</div>
        <ul class="list">
          <!-- <li>目前提供美元国际汇款</li> -->
        </ul>
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
    .cont {
      margin-bottom: 20px;
      &:last-child {
        margin-bottom: 0;
      }
      .title {
        font-size: 18px;
        position: relative;
        padding-bottom: 5px;
        &::after {
          content: '';
          width: 2em;
          height: 4px;
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
          height: 4px;
          border-radius: 2px;
          background-color: rgba(196, 196, 196, 0.1);
          position: absolute;
          bottom: 0;
          left: 0;
          display: inline-block;
          z-index: 2;
        }
      }
      .list {
        list-style: inside;
        padding: 20px;
        li {
          font-size: 16px;
          color: #666;
        }
      }
    }
  }
}
</style>
