<script setup>
import { ref, reactive, onMounted, h } from 'vue'

onMounted(() => {
  handleImgSrc()
})

// 图片路径
const imgUrl = ref({})
const handleImgSrc = async () => {
  let m1 = await import('@/assets/images/unionpayinternational.png')
  let m2 = await import('@/assets/images/CMB.jpeg')
  imgUrl.value = {
    m1: m1.default,
    m2: m2.default
  }
}
</script>

<template>
  <footer>
    <div class="max-width">
      <div class="title">合作机构</div>
      <div class="content">
        <img :src="imgUrl.m1" height="50" />
        <img :src="imgUrl.m2" height="50" />
      </div>
    </div>
    <div class="max-width link">
      <div>
        <div class="title">友情链接</div>
        <div class="content">
          <label for="">吉布提央行</label>
          <label for="">吉布提财政部</label>
          <label for="">吉布提投资促进局</label>
        </div>
      </div>
      <div>
        <div class="title">常用链接</div>
        <div class="content">
          <label for="">首页</label>
          <label for="">关于我们</label>
          <label for="">新闻动态</label>
        </div>
      </div>
      <div>
        <div class="title">联系我们</div>
        <div class="content">
          <div for="">邮件：info@silkroadibank.com</div>
          <div for="">电话：+(253) 2134 1266</div>
        </div>
      </div>
    </div>
    <div class="max-width">
      Copyright © 2016-2022 Silkroad International Bank, All Rights Reserved
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  background-color: #333;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  color: white;
  .max-width {
    width: 100%;
    padding: 10px;
    margin: 0 auto;
    .title {
      font-size: 18px;
      margin-bottom: 10px;
    }
    .content {
      img {
        margin-right: 20px;
      }
    }
  }
  .link {
    width: 100%;
    display: flex;
    justify-content: space-between;
    & > div {
      max-width: 33.33%;
    }

    .title {
      text-align: left;
    }
    .content {
      text-align: left;
      label {
        margin-right: 20px;
        text-align: justify;
        display: inline-block;
        &:hover {
          cursor: pointer;
          color: rgba(0, 188, 150, 0.9);
        }
        & > div {
          text-align: left;
        }
      }
    }
  }
}
</style>
