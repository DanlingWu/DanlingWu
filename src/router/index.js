import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Posts from '@/components/Posts.vue'
import AllPopularPosts from '@/components/AllPopularPosts'
import AdminCURD from '@/components/AdminCURD'
import Admin from '@/components/Admin'
import NewPost from '@/components/NewPost'
import EditPost from '@/components/EditPost'

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
  ]
})
