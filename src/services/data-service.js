import data from '../data/posts.json';

function getPosts() {
  return new Promise((resolve, reject) => {
    window.setTimeout(() => {
      resolve(data.posts);
    }, 3000);
  });
}

export default getPosts;
