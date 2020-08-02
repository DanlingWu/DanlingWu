import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './index.js'
import HelloWorld from '@/components/HelloWorld'
import Posts from '@/components/Posts.vue'
import AllPopularPosts from '@/components/AllPopularPosts'
import AdminCURD from '@/components/AdminCURD'
import Admin from '@/components/Admin'
import NewPost from '@/components/NewPost'
import EditPost from '@/components/EditPost'
import CategoryMenu from '@/components/CategoryMenu'
import ImageUpload from '@/components/ImageUpload'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Secure from '@/components/Secure'


Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/posts/:id',
      name: 'Posts',
      component: Posts
    },
    {
      path: '/AllPopularPosts',
      name: 'AllPopularPosts',
      component: AllPopularPosts
    },
    {
      path: '/AdminCURD',
      name: 'AdminCURD',
      component: AdminCURD
    },
    {
      path: '/Admin',
      name: 'Admin',
      component: Admin
    },
    {
      path: '/NewPost',
      name: 'NewPost',
      component: NewPost
    },
    {
      path: '/EditPost/:id',
      name: 'EditPost',
      component: EditPost
    },
    {
      path: '/CategoryMenu',
      name: 'CategoryMenu',
      component: CategoryMenu
    },
    {
      path: '/ImageUpload',
      name: 'ImageUpload',
      component: ImageUpload
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register
    },
    {
      path: '/Secure',
      name: 'Secure',
      component: Secure,
      meta: {
        requiresAuth: true
      },
    },
  ]
})
/**
 router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.isLoggedIn) {
      next('/Admin')
      return
    }
    next('/login')
  } else {
    next()
  }
})
 */

