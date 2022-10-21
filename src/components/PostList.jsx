import '../css/PostList.css';
import { useEffect, useState } from 'react';
import { GetPostsApi } from '../services/data-service';
import Post from './Post';
import { ProgressBar } from 'loading-animations-react';
import { useNavigate } from 'react-router';

// function randomIntFromInterval(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

const initialState = [];

function PostList({ post, token }) {
  const [posts, setPosts] = useState(initialState);
  const navigate = useNavigate();

  useEffect(() => {
    if (token === null) {
      navigate('/login');
    } else {
      GetPostsApi()
        .then((posts) => {
          setPosts(posts);
        })
        .catch((err) => {
          navigate('/login');
        });
    }
  }, [navigate, token]);

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
          .filter((p) =>
            post === null
              ? true
              : p.text.includes(post.toLowerCase()) || p.author.username.includes(post.toLowerCase()),
          )
          .map((post, index) => (
            <Post
              key={index}
              user={post.author.username}
              message={post.text}
              likes={post.likes}
              comments={Object.keys(post.comments).length}
              img={post.image ? post.image : `https://robohash.org/user${post.id}`}
              created_at={post.createdAt.split('T')[0]}
            />
          ))
      )}
    </div>
  );
}

export default PostList;
