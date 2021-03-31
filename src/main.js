import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store'

// 设置反向代理，前端请求默认发送到 http://localhost:8081/xyxblog
var axios = require('axios')
<<<<<<< HEAD
// axios.defaults.baseURL = 'http://xyxblog.top:8081/xyxblog'
axios.defaults.baseURL = process.env.API_ROOT
=======
axios.defaults.baseURL = 'http://81.70.147.206:8081/xyxblog'
>>>>>>> cdc60f92e35a685b4345310aa3c392802232c3f3
// 全局注册，之后可在其他组件中通过 this.$axios 发送数据
Vue.prototype.$axios = axios
Vue.config.productionTip = false

Vue.use(ElementUI)

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    if (store.state.user.userName) {
      next()
    } else {
      next({
        path: 'login',
        query: {redirect: to.fullPath}
      })
    }
  } else {
    next()
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store,
  components: { App },
  template: '<App/>'
})
