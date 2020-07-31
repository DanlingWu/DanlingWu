// imports of AJAX functions will go here
import { fetchAdminPosts, postNewAdminPost, updateAdminPost, fetchAdminPost, deleteAdminPost} from '@/api'

const state = {
  // single source of data
  adminPosts: {},
  currentAdminPost: {},
}

const actions = {
  // asynchronous operations
    loadAdminPosts(context) {
        return fetchAdminPosts()
            .then((response) => context.commit('setAdminPosts', { posts: response.data }))
    },
    loadAdminPost(context, { id }) {
        return fetchAdminPost(id)
            .then((response) => context.commit('setAdminPost', { post: response.data }))
    },
    async refreshPosts () {
        this.loading = true
        this.adminPosts = await fetchAdminPosts();
        this.loading = false
    },
    async addPost({commit}, post){
        await postNewAdminPost(post);
        commit("addNewPost", post)
    },
    async deletePost({commit}, id){
        if (confirm('Are you sure you want to delete this post?')){
            await deleteAdminPost(id)
            commit("removePost", id)
        }
    },
    async editPost({commit}, post){
        await updateAdminPost(post);

    },
}

const mutations = {
  // isolated data mutations
    setAdminPosts (state, payload) {
        state.adminPosts = payload.posts
    },
    setAdminPost (state, payload) {
        state.currentAdminPost = payload.post
    },
    addNewPost: (state, post) => (
        //state.adminPosts.unshift(post)
        state.adminPosts.splice(0, 0, post)
    ),
    removePost: (state, id) => (
        state.adminPosts.filter(post => post.id !== id),
        state.adminPosts.splice(post => post.id, 1) //splice() changes original array
    ),
}

const getters = {
  // reusable data accessors
  getAdminPostById: (state, id) => {
    return state.adminPosts.filter(post => post.id === id)
  }
}

export default{
    namespaced: true,
    state,
    actions,
    mutations,
    getters,
}
