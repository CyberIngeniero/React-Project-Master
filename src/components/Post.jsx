import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import { FcLike, } from "react-icons/fc";


function Post({ user, message, created, likes, comments, img }) {
  return (
    <div className="card m-3" style={{ width: "18rem" }}>
      <img src={img} className="card-img-top" alt="..."></img>
      <div className="card-body">
        {/* <p className="card-text text-start">{created}</p> */}
        <p className="card-text text-end"><FcLike /> {likes}</p>
        <h6 className="card-title text-start font">{user}</h6>
        <p className="card-text">{message}</p>
        <p className="card-text text-black-50"> <ModeCommentOutlinedIcon /> Comments ({comments}) </p>
      </div>
    </div>
  );
}

export default Post;
