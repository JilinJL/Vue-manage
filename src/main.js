import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from './store';
import './api/mock'
import Cookie from 'js-cookie';
Vue.config.productionTip = false

Vue.use(router)
Vue.use(ElementUI)

// 添加全局前置路由守卫
router.beforeEach((to,from,next)=>{
  // 判断cookie
  const token = Cookie.get('token')
  if(!token && to.name!=='login'){
    //跳转登陆页面
    next({name: 'login'})
  }else if(token && to.name==='login'){
    next({name: 'home'})
  }else{
    next()
  }
})
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
