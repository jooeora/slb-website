import { defineStore } from 'pinia'
import { getStorage, setStorage, getBrowserLang } from '@/utils/index'

export const useMainStore = defineStore({
  id: 'main', // id必填，且需要唯一

  state: () => ({
    lang: getStorage('lang') || getBrowserLang()
  }),

  // 开启数据缓存
  persist: {
    enabled: true
  },

  actions: {
    setLang(lang = 'zh-CN') {
      this.lang = lang
      setStorage('lang', lang)
    }
  }
})
