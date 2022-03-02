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
        <n-breadcrumb-item> 关于我们-丝路银行简介 </n-breadcrumb-item>
      </n-breadcrumb>
    </div>
    <div class="max-width content">
      <div class="cont">
        <div class="title">丝路国际银行简介</div>
        <ul class="list">
          <li>
            <span>丝路国际银行（Silkroad International Bank，简称SIB）</span>
            位于吉布提共和国首都吉布提市，由招商局、丝路亿商等中资企业和吉布提政府共同发起，经吉布提央行批准成立的吉布提第13家商业银行;
            是中国“一带一路”战略在非洲落地的重要金融基础设施，也是中非在金融领域的务实合作成果之一。
          </li>
          <li>
            <span>丝路国际银行</span>
            秉承“连通丝绸之路，共创东非辉煌”的经营理念，坚持“立足吉布提，服务东非，连接中国，面向全球”的发展定位，助力吉布提打造成为“东非的金融中心，非洲之角的迪拜”。
          </li>
          <li>
            <span>丝路国际银行</span>
            以“科学、稳健、协调发展”为根本，不断开拓市场，深化金融创新，致力成为多项银行业务领域的市场领先者，致力于为吉布提人民及在吉布提的外资企业提供良好的金融服务。
          </li>
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
        list-style: none;
        padding: 20px;
        li {
          font-size: 16px;
          color: #666;
          padding-bottom: 20px;
          &:last-child {
            padding-bottom: 0;
          }
          span {
            font-weight: 700;
            color: #333;
            line-height: 1.6;
          }
        }
      }
    }
  }
}
</style>
