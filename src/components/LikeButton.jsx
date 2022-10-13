import { useState } from 'react';
import cn from 'classnames';
import { ReactComponent as Hand } from '../img/hand.svg';

import '../css/LikeButton.scss';

const particleList = Array.from(Array(10));

const LikeButton = ({clickState}) => {
  const [liked, setLiked] = useState(null);
  const [clicked, setClicked] = useState(false);

  return (
    <button
      onClick={() => {
        setLiked(!liked);
        setClicked(true);
        clickState(!liked);
      }}
      onAnimationEnd={() => setClicked(false)}
      className={cn('like-button-wrapper', {
        liked,
        clicked,
      })}
    >
      {liked && (
        <div className='particles'>
          {particleList.map((_, index) => (
            <div
              key={index}
              className='particle-rotate'
              style={{
                transform: `rotate(${(360 / particleList.length) * index + 1}deg)`,
              }}
            >
              <div className='particle-tick' />
            </div>
          ))}
        </div>
      )}
      <div className='like-button'>
        <Hand />
        <span>Like</span>
        <span className={cn('suffix', { liked })}>d</span>
      </div>
    </button>
  );
};

export default LikeButton;
