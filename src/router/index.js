import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Posts from '@/components/Posts.vue'
import PopularPosts from '@/components/PopularPosts'
import AllPopularPosts from '@/components/AllPopularPosts'

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
      path: '/PopularPosts',
      name: 'PopularPosts',
      component: PopularPosts
    },
  ]
})
