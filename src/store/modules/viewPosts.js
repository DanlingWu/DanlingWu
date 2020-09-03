import { fetchPosts, fetchPost, fetchPostsPerPage } from '@/api'

const state = {
  currentPost: {},
  popularPosts: [],
  recentPosts: [],
  itemsPerPage: [],
  totalPages: '',
}

const actions = {
  loadPost(context, { id }) {
    return fetchPost(id)
      .then((response) => context.commit('setPost', { post: response.data }))
  },
  async loadPopularPosts(context, pageObj) {
    let response = await fetchPostsPerPage(pageObj);
    context.commit('setPopularPosts', { posts: response.data });
  },
  async loadRecentPosts(context, pageObj) {
    let response = await fetchPostsPerPage(pageObj);
    context.commit('setRecentPosts', { posts: response.data });
  },
  async loadPostsPerPage(context, pageObj) {
    console.log(pageObj)
    let response = await fetchPostsPerPage(pageObj);
    context.commit('setPostsPerPage', { posts: response.data });
    context.commit('seTotalPages', { posts: response.data });
  },
}

const mutations = {
  setPost(state, payload) {
    state.currentPost = payload.post || []
  },
  setPopularPosts(state, payload) {
    if (payload.posts === null) {
      state.popularPosts = []
    } else {
      state.popularPosts = payload.posts.items
    }
  },
  setRecentPosts(state, payload) {
    if (payload.posts === null) {
      state.recentPosts = []
    } else {
      state.recentPosts = payload.posts.items
    }
  },
  setPostsPerPage(state, payload) {
    if (payload.items === null) {
      state.itemsPerPage = []
    } else {
      state.itemsPerPage = payload.posts.items
    }
  },
  seTotalPages(state, payload) {
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
