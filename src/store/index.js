import Vue from 'vue'
import Vuex from 'vuex'

// imports of AJAX functions will go here
import { fetchPosts, fetchPost } from '@/api'

Vue.use(Vuex)

const state = {
  // single source of data
  posts: [],
  currentPost: {},
  popularPosts: {},
}

const actions = {
  // asynchronous operations
  loadPosts(context) {
    return fetchPosts()
      .then((response) => context.commit('setPosts', { posts: response.data }))
  },
  loadPost(context, { id }) {
    return fetchPost(id)
      .then((response) => context.commit('setPost', { post: response.data }))
  },
  /*
  loadPopularPosts (context) {
    return fetchPosts()
    .then((response) => context.commit('setPopularPosts'))
  },
*/
}

const mutations = {
  // isolated data mutations
  setPosts (state, payload) {
    state.posts = payload.posts
  },
  setPost (state, payload) {
    state.currentPost = payload.post
  },
  setPopularPosts (state) {
    // console.log()
    console.log(state.posts)
    state.popularPosts = state.posts;
    return state.popularPosts.sort((a, b) => {
      a[this.param] < b[this.param]
    })
  },
}

const getters = {
  // reusable data accessors
}

const store = new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})

export default store