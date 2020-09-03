import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store/index'
import Home from '@/components/Home'
import Post from '@/components/Post.vue'
import Admin from '@/components/Admin'
import NewPost from '@/components/NewPost'
import EditPost from '@/components/EditPost'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Secure from '@/components/Secure'
import PaginatedPosts from '@/components/PaginatedPosts'


Vue.use(VueRouter)

let router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/posts/:id',
      name: 'Post',
      component: Post
    },
    {
      path: '/Admin',
      name: 'Admin',
      component: Admin,
    },
    {
      path: '/NewPost',
      name: 'NewPost',
      component: NewPost,
      meta: {
        requiresAuth: true
      },
    },
    {
      path: '/EditPost/:id',
      name: 'EditPost',
      component: EditPost,
      meta: {
        requiresAuth: true
      },
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
    {
      path: '/PaginatedPosts',
      name: 'PaginatedPosts',
      component: PaginatedPosts,
    },
    {
      path: '/RecentPosts',
      name: 'RecentPosts',
      component: PaginatedPosts,
    },
    {
      path: '/PopularPosts',
      name: '/PopularPosts',
      component: PaginatedPosts,
    },
    {
      path: '/Category',
      name: 'Food',
      component: PaginatedPosts,
    },
    {
      path: '/Category',
      name: 'Cookery',
      component: PaginatedPosts,
    },
    {
      path: '/Category',
      name: 'Travel',
      component: PaginatedPosts,
    },
    {
      path: '/Category',
      name: 'Health',
      component: PaginatedPosts,
    },
  ],
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.state.auth.token) {
      next()
      return
    }
    next('/login')
  } else {
    next()
  }
})

export default router
