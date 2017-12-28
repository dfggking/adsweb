import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/app/login/Login'
import Register from '@/components/app/register/Register'
import SettingPwd from '@/components/app/register/SettingPwd'
import ResetPwd from '@/components/app/pwd/ResetPwd'
import Main from '@/components/app/main/Main'

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
      path: '/settingPwd',
      name: 'SettingPwd',
      component: SettingPwd
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
