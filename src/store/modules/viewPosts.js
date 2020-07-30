// imports of AJAX functions will go here
import { fetchPosts, fetchPost, fetchPopularPosts } from '@/api'

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
  loadPopularPosts (context) {
    return fetchPopularPosts()
    .then((response) => context.commit('setPopularPosts', { posts: response.data }))
  },
}

const mutations = {
  // isolated data mutations
  setPosts (state, payload) {
    state.posts = payload.posts
  },
  setPost (state, payload) {
    state.currentPost = payload.post
  },
  setPopularPosts (state, payload) {
    state.popularPosts = payload.posts
  },

}

const getters = {
  // reusable data accessors
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
