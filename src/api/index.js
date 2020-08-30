import axios from 'axios'

const API_URL = 'http://127.0.0.1:5000/allPosts'
const API_URL_Admin = 'http://127.0.0.1:5000/adminCURD'
const API_URL_Auth = 'http://127.0.0.1:5000/auth'

// Posts view only
export function fetchPosts() {
  return axios.get(`${API_URL}/AllBlogPosts/`)
}

export function fetchPost(postId) {
  return axios.get(`${API_URL}/AllBlogPosts/${postId}`)
}

export function fetchPostsPerPage(pageObj) {
  return axios.get(`${API_URL}/AllBlogPosts/page/?sort_by=${pageObj.sort_by}&page=${pageObj.pageNumber}&per_page=${pageObj.itemsPerPage}`)
}

// Admin view
export function fetchAdminPosts() {
  return axios.get(`${API_URL_Admin}/adminCURD/`)
}

export function postNewAdminPost (post) {
  console.log(post)
  return axios.post(`${API_URL_Admin}/adminCURD/create/`, post, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
}

export function updateAdminPost (postResponse) {
  return axios.put(`${API_URL_Admin}/adminCURD/${postResponse.id}`, postResponse)
}

export function fetchAdminPost(postId) {
  return axios.get(`${API_URL_Admin}/adminCURD/${postId}`)
}

export function deleteAdminPost(postId) {
  return axios.delete(`${API_URL_Admin}/adminCURD/${postId}`)
}

// Admin login/register
export function postLoginAdminUser(user){
  return axios.post(`${API_URL_Auth}/auth/login`, user)
}

export function fetchLogoutAdminUser(user){
  console.log(user)
  return axios.post(`${API_URL_Auth}/auth/logout`, user)
}

export function postRegisterAdminUser(user){
  return axios.post(`${API_URL_Auth}/auth/register`, user)
}
