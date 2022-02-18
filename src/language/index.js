import { createI18n } from 'vue-i18n' //引入vue-i18n组件

import { getStorage, getBrowserLang } from '@/utils/index'
//引入同级目录下文件
const modules = import.meta.globEager('./*')

//假设你还有其他目录下的语言文件 它的路径是 src/views/home/locales/en-US.ts
//那么你就可以 使用 :lower:（小写） :upper:（大写） 来引入文件
// const viewModules = import.meta.globEager(
//   '../views/**/locales/[[:lower:]][[:lower:]]-[[:upper:]][[:upper:]].ts'
// )

function getLangAll() {
  let message = {}
  getLangFiles(modules, message)
  // getLangFiles(viewModules, message)
  return message
}
/**
 * 获取所有语言文件
 * @param {Object} mList
 */
function getLangFiles(mList, msg) {
  for (let path in mList) {
    if (mList[path].default) {
      //  获取文件名
      let pathName = path.substring(path.lastIndexOf('/') + 1, 7)
      if (msg[pathName]) {
        msg[pathName] = {
          ...mList[pathName],
          ...mList[path].default
        }
      } else {
        msg[pathName] = mList[path].default
      }
    }
  }
}
// 获取当前语言（初始化时localStorage里没有存语言，默认为浏览器当前的语言）
const lang = getStorage('lang') || getBrowserLang()

//注册i8n实例并引入语言文件
const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: lang, // 语言标识（缓存里面没有就用中文）
  fallbackLocale: 'zh-CN', // 没有英文的时候默认中文语言
  messages: getLangAll()
})
export default i18n // 将i18n暴露出去，在main.js中引入挂载
