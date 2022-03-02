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
        <n-breadcrumb-item> 关于我们-大事记 </n-breadcrumb-item>
      </n-breadcrumb>
    </div>
    <div class="max-width content">
      <div class="cont">
        <div class="title">丝路国际银行大事记</div>
        <ul class="list">
          <li>
            <span>2017年8月1日</span>
            <div>丝路国际银行在吉布提的一家超市开通了第一台POS机。</div>
          </li>

          <li>
            <span>2017年7月25日</span>
            <div>
              丝路国际银行与中国银联国际在信用卡支付与 POS机
              结算领域签署了一项具有里程碑意义的合作协议
            </div>
          </li>
          <li>
            <span>2017年8月</span>
            <div>丝路国际银行与广东南粤银行签署了战略合作协议</div>
          </li>
          <li>
            <span>2017年7月</span>
            <div>丝路国际银行与广州银行签署了战略合作协议</div>
          </li>
          <li>
            <span>2017年1月18日 </span>
            <div>丝路国际银行正式挂牌运营</div>
          </li>
          <li>
            <span>2016年11月16日</span>
            <div>丝路国际银行在吉布提正式宣布成立，多方股东在吉布提签署合作协议</div>
          </li>
          <li>
            <span>2016年9月28日 </span>
            <div>
              吉布提中央银行向丝路国际银行颁发了临时牌照，允许丝路国际银行在吉布提开展相关业务
            </div>
          </li>
          <li>
            <span>2016年7月28日 </span>
            <div>
              丝路亿商公司等中资企业与吉布提国家财政部在北京签署合作协议，宣布将共同建立丝路国际银行
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
          display: flex;
          justify-content: flex-start;
          align-items: flex-start;
          &:last-child {
            padding-bottom: 0;
          }
          & > span {
            font-weight: 700;
            color: #333;
            display: inline-block;
            width: 150px;
          }
          & > div {
            flex: 1;
          }
        }
      }
    }
  }
}
</style>
