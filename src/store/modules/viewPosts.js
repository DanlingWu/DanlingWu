// imports of AJAX functions will go here
import { fetchPosts, fetchPost, fetchPopularPosts, fetchPostsPerPage } from '@/api'

const state = {
  // single source of data
  posts: [],
  currentPost: {},
  popularPosts: [],
  itemsPerPage: [],
  totalPages: '',
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
  async loadPopularPosts (context) {
    let response = await fetchPopularPosts();
    context.commit('setPopularPosts', { posts: response.data });
  },
  async loadPostsPerPage (context, pageObj) {
    //console.log(itemsPerPage)
    let response = await fetchPostsPerPage(pageObj);
    context.commit('setPostsPerPage', { posts: response.data });
    context.commit('seTotalPages', { posts: response.data });
  },
}

const mutations = {
  // isolated data mutations
  setPosts (state, payload) {
    state.posts = payload.posts || []
  },
  setPost (state, payload) {
    state.currentPost = payload.post
  },
  setPopularPosts (state, payload) {
    if (payload.posts === null) {
      state.popularPosts = []
    } else {
      state.popularPosts = payload.posts
    }
  },
  setPostsPerPage (state, payload) {
    if (payload.items === null) {
      state.itemsPerPage = []
    } else {
      state.itemsPerPage = payload.posts.items
    }
  },
  seTotalPages (state, payload) {
    state.totalPages = payload.posts.pages
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
