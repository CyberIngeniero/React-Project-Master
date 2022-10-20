import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import LikeCounter from './LikeCounter';

function Post({ user, message, created, likes, comments, img, created_at }) {
  return (
    <div className='card m-3' style={{ width: '18rem' }}>
      <img src={img} className='card-img-top' alt='...'></img>
      <div className='card-body'>
        <span>
          <LikeCounter Likes={likes} />
        </span>
        <h6 className='card-title text-start font'>{user}</h6>
        <p className='card-text'>{message}</p>
        <span>
          <ModeCommentOutlinedIcon /> {comments}
          <p className='card-text float-end fs-7 text-black-50'>{created_at}</p>
        </span>
      </div>
    </div>
  );
}

export default Post;
