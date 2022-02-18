<script setup>
import { PhoneFilled, Email, LocationFilled } from '@vicons/carbon'
import { Icon } from '@vicons/utils'
import { useMainStore } from '@/stores/main'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const store = useMainStore()
// 切换国家语言
function onChangeLang(lang) {
  // 使用 localStorage 和 pinia 存储语言状态
  store.setLang(lang)
  // 刷新页面更新视图
  window.location.reload()
}

// 你可以直接使用渲染为 SVG 的组件
// 或者把它包裹在 @vicons/utils 提供的 Icon 组件中
</script>

<template>
  <div class="lang-contact">
    <div class="flex-box max-width">
      <div class="lang">
        <span @click="onChangeLang('zh-CN')">中文</span>
        <span @click="onChangeLang('en-US')">English</span>
        <span @click="onChangeLang('fr-FR')">Français</span>
      </div>
      <div class="contact">
        <span>
          <Icon :size="16"> <PhoneFilled /> </Icon>
          <label> {{ t('header.phone') }}</label>
        </span>
        <span>
          <Icon :size="16"> <Email /> </Icon>
          <label>{{ t('header.email') }}</label>
        </span>
        <span>
          <Icon :size="16"> <LocationFilled /> </Icon>
          <label>{{ t('header.locationFilled') }}</label>
        </span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.lang-contact {
  width: 100%;
  height: 40px;
  background-color: rgba(0, 188, 150, 0.9);
  .flex-box {
    height: 100%;
    text-align: center;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    color: white;
    font-size: 12px;
    .lang {
      span {
        padding: 0 10px;
        margin-right: 10px;
        cursor: pointer;
        &:hover {
          text-decoration: underline;
        }
      }
    }
    .contact {
      flex: 1;
      display: flex;
      justify-content: flex-end;
      span {
        margin-left: 10px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        label {
          margin-left: 8px;
        }
      }
    }
  }
}
</style>
