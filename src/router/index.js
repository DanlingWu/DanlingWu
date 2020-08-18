import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store/index'
import Home from '@/components/Home'
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
import Pagenation from '@/components/Pagenation'
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
      name: 'Posts',
      component: Posts
    },
    {
      path: '/AllPopularPostsX',
      name: 'AllPopularPostsX',
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
      path: '/AllPopularPosts',
      name: '/AllPopularPosts',
      component: PaginatedPosts,
    },
  ],
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    console.log(store.state.auth.token);
    if (store.state.auth.token) {
      console.log(store.state.auth.token);
      next()
      return
    }
    console.log("I'm NOT logge din")
    next('/login')
  } else {
    next()
  }
})

/**
 *
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

router.beforeEach((to, from, next) => {
  if (to.name == 'Admin' && !store.getters.isLoggedIn) next({ name: 'Login' })
    else next()
})

router.beforeEach((to, from, next) => {
  console.log(store.getters.isLoggedIn);
  if(to.matched.some(record => record.meta.requiresAuth)) {
    console.log(store.getters.isLoggedIn);
    if (store.getters.isLoggedIn) {
      console.log("I'm logge din")
      next()
      return
    }
    console.log("I'm NOT logge din")
    next('/login')
  } else {
    next()
  }
})
 */

export default router
