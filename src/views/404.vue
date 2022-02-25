<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const goHome = () => {
  console.log('go home')
  router.push({ path: '/' })
}
</script>
<template>
  <div class="result-404">
    <n-result status="404" title="404 资源不存在" description="">
      <template #footer>
        <n-button @click="goHome">回到首页</n-button>
      </template>
    </n-result>
  </div>
</template>
<style lang="scss" scoped>
.result-404 {
  min-height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
