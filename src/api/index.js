import axios from 'axios'

const API_URL = 'http://127.0.0.1:5000/allPosts'
const API_URL_PopularPost = 'http://127.0.0.1:5000/allPopularPostsAPI'

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

// http://127.0.0.1:5000/allPosts/

/AllPopularBlogPosts/