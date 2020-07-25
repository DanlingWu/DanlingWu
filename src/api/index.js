import axios from 'axios'

const API_URL = 'http://127.0.0.1:5000/allPosts'

export function fetchPosts() {
  return axios.get(`${API_URL}/AllBlogPosts/`)
}

export function fetchPost(postId) {
  return axios.get(`${API_URL}/AllBlogPosts/${postId}`)
}

// http://127.0.0.1:5000/allPosts/