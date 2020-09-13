import axios from 'axios'

const API_URL = process.env.VUE_APP_BASE_URL + 'allPosts'
const API_URL_Admin = process.env.VUE_APP_BASE_URL + 'adminCURD'
const API_URL_Auth = process.env.VUE_APP_BASE_URL + 'auth'

// Posts view only
export function fetchPosts() {
  return axios.get(`${API_URL}/AllBlogPosts/`)
}

export function fetchPost(postId) {
  console.log("foo" +  process.env.VUE_APP_BASE_URL);
  return axios.get(`${API_URL}/AllBlogPosts/${postId}`)
}

export function fetchPostsPerPage(pageObj) {
  if(pageObj.category_id){
    pageObj.sort_by = "recent"
    return axios.get(`${API_URL}/AllBlogPosts/page/?sort_by=${pageObj.sort_by}&page=${pageObj.pageNumber}&per_page=${pageObj.itemsPerPage}&category_id=${pageObj.category_id}`)
  }
  return axios.get(`${API_URL}/AllBlogPosts/page/?sort_by=${pageObj.sort_by}&page=${pageObj.pageNumber}&per_page=${pageObj.itemsPerPage}`)
}

// Admin view
export function fetchAdminPosts() {
  return axios.get(`${API_URL_Admin}/adminCURD/`)
}

export function postNewAdminPost (post) {
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
  return axios.post(`${API_URL_Auth}/auth/logout`, user)
}

export function postRegisterAdminUser(user){
  return axios.post(`${API_URL_Auth}/auth/register`, user)
}
