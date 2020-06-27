import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Daftar from '../views/Daftar.vue'
import LupaPassword from '../views/LupaPassword.vue'
import ResetPassword from '../views/ResetPassword.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/daftar',
    name: 'Daftar',
    component: Daftar
  },
  {
    path: '/lupa-password',
    name: 'Lupa Password',
    component: LupaPassword
  },
  {
    path: '/reset-password',
    name: 'Reset Password',
    component: ResetPassword
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
