import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'
import Apply from '../views/Apply'
import Vacation from '../views/Vacation'
import Login from '../views/Login'
import Detile from '../views/Detile'
import De from '../views/De'
Vue.use(Router)

let router=new Router({
  routes: [
    {
      path:'/',
      redirect:'/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
    },
    {
      path: '/vacation',
      name: 'vacation',
      component: Vacation
    },
    {
      path: '/apply',
      name: 'apply',
      component: Apply
    },
    {
      path: '/detile/:id',
      name: 'detile',
      component: Detile
    },
    {
      path: '/de/:id',
      name: 'de',
      component: De
    },
    {
      path:'/login',
      name:'login',
      component:Login
    }
  ]
})

router.beforeEach((to, from, next) => {
  // console.log(to);
    if (localStorage.token){//已登陆
          next(); //渲染对应的页面
    }
  else{//未登录
      if (to.path == '/login'){
        next(); //渲染对应的页面
      }
      else
      {
        next('/login');
      }
    }
  } 
)
export default router