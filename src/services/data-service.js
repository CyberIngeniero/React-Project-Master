import axios from 'axios';
import data from '../data/posts.json';

const URL = 'https://three-points.herokuapp.com/api';


export async function GetPostsApi() {
  const response = await axios
    .get(`${URL}/posts`, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } });
    console.log(response.data);
  return response.data;
}

export function login(username, password) {
  return axios.post(`${URL}/login`, { username, password }).then((response) => response.data);
}
export function getPosts() {
  return new Promise((resolve, reject) => {
    window.setTimeout(() => {
      resolve(data.posts);
    }, 3000);
  });
}
