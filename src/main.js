import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'

import 'normalize.css/normalize.css'// A modern alternative to CSS resets
import './styles/index.less' // global css
import '@/icons/iconfont/iconfont.css' // iconfont

import ElementUI from 'element-ui' // ElementUI
import 'element-ui/lib/theme-chalk/index.css'
// import './permission'

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
