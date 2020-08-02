import axios from 'axios'

const API_URL = 'http://127.0.0.1:5000/allPosts'
const API_URL_PopularPost = 'http://127.0.0.1:5000/allPopularPostsAPI'
const API_URL_Admin = 'http://127.0.0.1:5000/adminCURD'
const API_URL_Auth = 'http://127.0.0.1:5000/auth'

export function fetchPosts() {
  return axios.get(`${API_URL}/AllBlogPosts/`)
}

export function fetchPost(postId) {
  return axios.get(`${API_URL}/AllBlogPosts/${postId}`)
}

export function fetchPopularPosts() {
  //console.log(`${API_URL_PopularPost}/AllPopularBlogPosts/`)
  return axios.get(`${API_URL_PopularPost}/AllPopularBlogPosts/`)
}

export function fetchAdminPosts() {
  return axios.get(`${API_URL_Admin}/adminCURD/`)
}

export function postNewAdminPost (post) {
  console.log(post)
  return axios.post(`${API_URL_Admin}/adminCURD/create/`, post)
}

export function updateAdminPost (postResponse) {
  //console.log(postResponse)
  //console.log(`${API_URL_Admin}/adminCURD/${postResponse.id}`);
  return axios.put(`${API_URL_Admin}/adminCURD/${postResponse.id}`, postResponse)
}

export function fetchAdminPost(postId) {
  return axios.get(`${API_URL_Admin}/adminCURD/${postId}`)
}

export function deleteAdminPost(postId) {
  return axios.delete(`${API_URL_Admin}/adminCURD/${postId}`)
}

export function postLoginAdminUser(user){
  //console.log(user)
  return axios.post(`${API_URL_Auth}/auth/login`, user)
}

export function fetchLogoutAdminUser(user){
  console.log(user)
  return axios.post(`${API_URL_Auth}/auth/logout`, user)
}

export function postRegisterAdminUser(user){
  return axios.post(`${API_URL_Auth}/auth/register`, user)
}


// http://127.0.0.1:5000/allPosts/
//export function postNewAdminPost (post, jwt) {
  //return axios.post(`${API_URL_Admin}/adminCURD/create`, post, { headers: { Authorization: `Bearer: ${jwt}` } })
//}
