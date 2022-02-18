import { createApp } from 'vue'
import VueWechatTitle from 'vue-wechat-title' //动态修改title
import router from './router/index'
import store from './stores/index'
import i18n from './language'
import App from './App.vue'
import { naive } from '@/utils/naive'

const app = createApp(App)

app.use(naive)
app.use(VueWechatTitle)
app.use(router)
app.use(store)
app.use(i18n)

app.mount('#app')
