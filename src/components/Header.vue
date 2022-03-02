<script setup>
import { ref, onMounted, h } from 'vue'
import { PhoneFilled, Email, LocationFilled } from '@vicons/carbon'
import { Icon } from '@vicons/utils'
import { useMainStore } from '@/stores/main'
// import { useI18n } from 'vue-i18n'
// const { t } = useI18n()

onMounted(() => {
  handleImgSrc()
})

const store = useMainStore()
// 切换国家语言
function onChangeLang(lang) {
  // 使用 localStorage 和 pinia 存储语言状态
  store.setLang(lang)
  // 刷新页面更新视图
  window.location.reload()
}

// 图片路径
const logoImg = ref('')
const handleImgSrc = async () => {
  let m = await import('@/assets/images/newlogo.png')
  logoImg.value = m.default
}

// nav
import { RouterLink } from 'vue-router'
const activeKey = ref(null)

const menuOptions = [
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: 'index'
          }
        },
        { default: () => '首页' }
      ),
    key: 'home'
  },

  {
    label: '个人金融',
    key: 'ge',
    children: [
      {
        label: () => h(RouterLink, { to: { name: 'accountType' } }, { default: () => '账户种类' }),
        key: 'ge1'
      },
      {
        label: () => h(RouterLink, { to: { name: 'opening' } }, { default: () => '个人开户条件' }),
        key: 'ge2'
      },
      {
        label: () => h(RouterLink, { to: { name: 'server' } }, { default: () => '个人产品与服务' }),
        key: 'ge3'
      }
    ]
  },

  {
    label: '公司金融',
    key: 'gong',
    children: [
      {
        label: () =>
          h(RouterLink, { to: { name: 'accountTypeCom' } }, { default: () => '账户种类' }),
        key: 'gong1'
      },
      {
        label: () =>
          h(RouterLink, { to: { name: 'openingCom' } }, { default: () => '公司开户条件' }),
        key: 'gong2'
      },
      {
        label: () =>
          h(RouterLink, { to: { name: 'serverCom' } }, { default: () => '公司产品与服务' }),
        key: 'gong3'
      }
    ]
  },

  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: 'news'
          }
        },
        { default: () => '新闻动态' }
      ),
    key: 'new'
  },

  {
    label: '关于我们',
    key: 'about',
    children: [
      {
        label: () => h(RouterLink, { to: { name: 'intro' } }, { default: () => '丝路银行简介' }),
        key: 'about1'
      },
      {
        label: () => h(RouterLink, { to: { name: 'bigEvents' } }, { default: () => '大事记' }),
        key: 'about2'
      },
      {
        label: () => h(RouterLink, { to: { name: 'relation' } }, { default: () => '投资者关系' }),
        key: 'about3'
      },
      {
        label: () => h(RouterLink, { to: { name: 'contactus' } }, { default: () => '联系我们' }),
        key: 'about4'
      }
    ]
  }
]
</script>

<template>
  <div class="top-bar">
    <div class="flex-box max-width">
      <div class="lang">
        <span @click="onChangeLang('zh-CN')">中文</span>
        <span @click="onChangeLang('en-US')">English</span>
        <span @click="onChangeLang('fr-FR')">Français</span>
      </div>
      <div class="contact">
        <span>
          <Icon :size="16"> <PhoneFilled /> </Icon>
          <label>(+253)2134 1266</label>
        </span>
        <span>
          <Icon :size="16"> <Email /> </Icon>
          <label>info@silkroadibank.com</label>
        </span>
        <span>
          <Icon :size="16"> <LocationFilled /> </Icon>
          <label>Haramous 1 Lot No.2, Djibouti, BP 1877</label>
        </span>
      </div>
    </div>
  </div>

  <div class="logo-nav">
    <div class="flex-box max-width">
      <div class="logo">
        <img :src="logoImg" width="200" />
      </div>
      <div class="nav">
        <n-menu v-model:value="activeKey" mode="horizontal" :options="menuOptions" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.top-bar {
  width: 100%;
  height: 40px;
  background-color: rgba(0, 188, 150, 0.9);
}

.logo-nav {
  width: 100%;
  height: 80px;
  background-color: white;
  box-shadow: 0 1px 5px rgba(204, 204, 204, 0.5);
  position: sticky;
  top: 0;
  z-index: 999;
}

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
</style>
