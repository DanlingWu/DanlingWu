import { postLoginAdminUser, postRegisterAdminUser, fetchLogoutAdminUser} from '@/api'
import axios from 'axios'

const state= {
    status: '',
    token: localStorage.getItem('token') || '',
    user : {},
}

const actions = {
    login({commit}, user) {
        return new Promise((resolve, reject) => {
            commit('auth_request')
            postLoginAdminUser(user)
            .then(resp => {
                const token = resp.data.token
                const user = resp.data.user
                localStorage.setItem('token', resp.data.token)
                axios.defaults.headers['X-API-KEY'] = resp.data.token
                commit('auth_success', token, user)
                resolve(resp);
            })
            .catch(err => {
                commit('auth_error')
                localStorage.removeItem('token')
                reject(err)
            })
        })
    },
    register({commit}, user){
        return new Promise((resolve, reject) => {
            commit('auth_request')
            postRegisterAdminUser(user)
            .then(resp => {
                const token = resp.data.token
                const user = resp.data.user
                localStorage.setItem('token', token)
                axios.defaults.headers['X-API-KEY'] = resp.data.token
                commit('auth_success', token, user)
                resolve(resp)
            })
            .catch(err => {
                commit('auth_error', err)
                localStorage.removeItem('token')
                reject(err)
            })
        })
    },
    logout({commit}){
        return new Promise((resolve, reject) => {
              commit('logout')
              localStorage.removeItem('token')
              delete axios.defaults.headers['X-API-KEY']
              resolve()
        })
    },
}

const mutations = {
    auth_request(state){
        state.status = 'loading'
    },
    auth_success(state, token, user){
        state.status = 'success'
        state.token = token
        state.user = user
    },
    auth_error(state){
        state.status = 'error'
    },
    logout(state){
        state.status = ''
        state.token = ''
    },
}

const getters = {
    isLoggedIn: state => {
        if (state.token) {
            return true;
        }
        return false;
    },
    authStatus: state => state.status,

}

export default{
    namespaced: true,
    state,
    actions,
    mutations,
    getters,
}
