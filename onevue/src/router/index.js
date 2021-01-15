import Vue from 'vue'
import Router from 'vue-router'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css'
import { constRoutes } from './router'
import store from '@/store'
Vue.use(Router)
const router = new Router({
  mode: 'history',
  scrollBehavior: () => ({
    y: 0
  }),
  base: '/qingwei/',
  routes: constRoutes
})
// 路由导航守卫
router.beforeEach(async (to, from, next) => {
  NProgress.start()
  // if(to.path==='/login') return next()
  // const tokenStr = window.sessionStorage.getItem('token')
  // if(!tokenStr) return next('/login')
  next()
  // if (to.path === '/login') {
  //   next({ path: '/homePage' })
  // } else {
  // let accessRoutes = []
  // accessRoutes = await store.dispatch('routes/setAllRoutes')
  // router.addRoutes(accessRoutes)
  // next()
  // }
})
router.afterEach((to, from) => {
  NProgress.done() // finish progress bar
})
// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
export default router
