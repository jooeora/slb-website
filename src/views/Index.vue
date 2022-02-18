<script setup>
import { ref, onMounted } from 'vue'
import { Building } from '@vicons/carbon'
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
      <!-- <div>
        <n-icon size="40">
          <Building />
        </n-icon>
      </div>
      <div>
        <n-icon size="40">
          <Building />
        </n-icon>
      </div>
      <div>
        <n-icon size="40">
          <Building />
        </n-icon>
      </div> -->
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
      flex: 1;
      text-align: center;
    }
  }
}
.carousel-img {
  width: 100%;
  height: 400px;
  object-fit: cover;
}
</style>
