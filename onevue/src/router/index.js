import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'
const Home=()=>import('@/components/Home')
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect:'/login'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    }
  ]
})
// 路由导航守卫
router.beforeEach((to,from,next)=>{
  if(to.path==='/login') return next()
  const tokenStr = window.sessionStorage.getItem('token')
  if(!tokenStr) return next('/login')
  next()
})
export default router
