import Vue from 'vue'
import Vuex from 'vuex'
import admin from './modules/admin'
import viewPosts from './modules/viewPosts'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    viewPosts,
    admin
  },
})
