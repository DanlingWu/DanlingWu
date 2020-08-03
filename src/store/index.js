import Vue from 'vue'
import Vuex from 'vuex'
import admin from './modules/admin'
import viewPosts from './modules/viewPosts'
import auth from './modules/auth'

Vue.use(Vuex)

let store = new Vuex.Store({
  modules: {
    viewPosts,
    admin,
    auth,
  },
})

export default store
