import { useState } from 'react';
import { FcLike } from 'react-icons/fc';
import LikeButton from './LikeButton';

function LikeCounter({ Likes }) {
  const [count, setCount] = useState(Likes);
  const [clicked, setClicked] = useState(false);

  function DoClick(clicked) {
    setClicked(clicked);
  }

  return (
    <div className='d-flex flex-row justify-content-between'>
      <div className='p-2'>
        <LikeButton clickState={DoClick} />
      </div>
      <div className='p-2'>
        <FcLike size={40} /> {clicked ? count + 1 : count}
      </div>
    </div>
  );
}

export default LikeCounter;
