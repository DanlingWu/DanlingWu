import Vue from 'vue'
import Vuex from 'vuex'
import VueTimeago from 'vue-timeago'
import admin from './modules/admin'
import viewPosts from './modules/viewPosts'
import auth from './modules/auth'

Vue.use(Vuex)
Vue.use(VueTimeago, {
  name: 'Timeago', // Component name, `Timeago` by default
  locale: 'en', // Default locale
  // We use `date-fns` under the hood
  // So you can use all locales from it
  locales: {
    'zh-CN': require('date-fns/locale/zh_cn'),
    ja: require('date-fns/locale/ja')
  }
})

let store = new Vuex.Store({
  modules: {
    viewPosts,
    admin,
    auth,
  },
})

export default store
