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
        <n-breadcrumb-item> 关于我们-投资者关系 </n-breadcrumb-item>
      </n-breadcrumb>
    </div>
    <div class="max-width content">
      <div class="cont">
        <div class="title">吉布提政府</div>
        <ul class="list">
          <li>
            <div>
              吉布提位于东非之角，地理位置非常重要。丝路国际银行是第一家中资企业在非洲大陆获得银行牌照，也是“一带一路”战略构想中在海外成立的首个商业银行。
            </div>
            <div>
              详情请访问：
              <n-button
                text
                tag="a"
                href="http://www.ministere-finances.dj/"
                target="_blank"
                type="primary"
              >
                吉布提财政部
              </n-button>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="max-width content">
      <div class="cont">
        <div class="title">招商局集团</div>
        <ul class="list">
          <li>
            <div>
              招商局集团是国家驻港大型企业集团，经营总部设于香港，业务主要集中于交通、金融、房地产三大核心产业。
            </div>
            <div>
              详情请访问：
              <n-button text tag="a" href="http://www.cmhk.com/" target="_blank" type="primary">
                招商局集团
              </n-button>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="max-width content">
      <div class="cont">
        <div class="title">丝路亿商</div>
        <ul class="list">
          <li>
            <div>丝路亿商信息技术有限公司是全球领先的外贸综合服务公司，服务于“一带一路”建设。</div>
            <div>
              详情请访问：
              <n-button
                text
                tag="a"
                href="http://www.eportalliance.com/"
                target="_blank"
                type="primary"
              >
                丝路亿商
              </n-button>
            </div>
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
          line-height: 1.6;
          &:last-child {
            padding-bottom: 0;
          }
          .n-button {
            font-size: 16px;
          }
        }
      }
    }
  }
}
</style>
