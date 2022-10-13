import '../css/PostList.css';
import { useEffect, useState } from 'react';
import getPosts from '../services/data-service';
import Post from './Post';
import { ProgressBar } from 'loading-animations-react';

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const initialState = [];

function PostList({ post }) {
  const [posts, setPosts] = useState(initialState);

  useEffect(() => {
    getPosts().then((posts) => {
      setPosts(posts);
    });
  }, []);

  return (
    <div className='d-flex flex-wrap p-3'>
      {posts === initialState ? (
        <div className='ProgressBar'>
          <ProgressBar
            className='ProgressBarComp'
            borderColor='blue'
            text='Loading...'
            sliderColor='#fff'
            sliderBackground='rgb(0, 0, 0)'
          />
        </div>
      ) : (
        posts
          .filter((p) => (post === null ? true : (p.body.includes(post.toLowerCase()) || `@user${p.userId}`.includes(post.toLowerCase()))))
          .map((post, index) => (
            <Post
              key={index}
              user={`@user${post.userId}`}
              message={post.body}
              likes={randomIntFromInterval(50, 1000)}
              comments={randomIntFromInterval(10, 300)}
              img={`https://robohash.org/user${post.userId}`}
            />
          ))
      )}
    </div>
  );
}

export default PostList;
