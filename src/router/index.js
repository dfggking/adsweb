import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login/Login'
import Register from '@/components/register/Register'
import ResetPwd from '@/components/pwd/ResetPwd'
import Main from '@/components/main/Main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/resetPwd',
      name: 'ResetPwd',
      component: ResetPwd
    },
    {
      path: '/main',
      name: 'Main',
      component: Main
    },
  ]
})
