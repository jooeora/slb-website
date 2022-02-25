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
        <n-breadcrumb-item> 个人金融-个人开户条件 </n-breadcrumb-item>
      </n-breadcrumb>
    </div>
    <div class="max-width content">
      <div class="cont">
        <div class="title">个人开户需要提供的资料</div>
        <ul class="list">
          <li>有效身份证明原件、照片</li>
          <li>作证明、三个月以内的工资单或收入证明</li>
          <li>居住许可证(外国人)</li>
          <li>账户持有人的签字样本</li>
          <li>地址证明</li>
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
        list-style: inside decimal;
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
