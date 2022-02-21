<script setup>
import { ref, onMounted } from 'vue'
import { Building, Person, PhoneIp } from '@vicons/carbon'
onMounted(() => {
  handleImgSrc()
})

// 图片路径
const imgUrl = ref('')
const handleImgSrc = async () => {
  let m = await import('@/assets/images/Finance.jpeg')
  imgUrl.value = m.default
}
</script>
<template>
  <div class="main">
    <n-carousel :space-between="20" draggable>
      <img class="carousel-img" :src="imgUrl" />
    </n-carousel>
    <div class="max-width featured-post-wrap">
      <div>
        <n-icon size="64">
          <Building />
        </n-icon>
        <div class="title">公司产品与服务</div>
        <n-ellipsis style="max-width: 240px">公司产品与服务</n-ellipsis>
      </div>
      <div>
        <n-icon size="64">
          <Person />
        </n-icon>
        <div class="title">个人产品与服务</div>
        <n-ellipsis style="max-width: 240px">公司产品与服务</n-ellipsis>
      </div>
      <div>
        <n-icon size="64">
          <PhoneIp />
        </n-icon>
        <div class="title">联系我们</div>

        <n-ellipsis style="max-width: 240px">
          吉布提地址：Haramous 1 Lot No.2, Djibouti, BP 1877
        </n-ellipsis>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main {
  background-color: rgba(204, 204, 204, 0.2);
  .featured-post-wrap {
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    & > div {
      text-align: center;
      padding: 30px 60px;
      background-color: white;
      margin: 20px 0 20px 20px;
      flex: 1;
      box-sizing: border-box;
      border-radius: 6px;
      border-bottom: 4px solid white;
      &:first-child {
        margin-left: 0;
      }
      &:hover {
        color: rgba(0, 188, 150, 0.9);
        cursor: pointer;
        border-bottom: 4px solid rgba(0, 188, 150, 0.9);
      }

      .title {
        font-size: 18px;
        margin: 10px 0;
      }
    }
  }
}
.carousel-img {
  width: 100%;
  height: 400px;
  object-fit: cover;
}
</style>
