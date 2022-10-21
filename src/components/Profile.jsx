import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import imgProfile from '../img/profile.jpg';

function Profile({ token }) {
  const username = '@Viserys';
  const bio = 'Legitimo Heredero al trono de hierro.';
  const navigate = useNavigate();
  const [profileState, setProfile] = useState(false);

  useEffect(() => {
    if (!token) {
      navigate('/login');
    } else {
      setProfile(true);
    }
  }, [navigate, token]);

  if (profileState) {
    return (
      <div className='d-flex align-items-center flex-column'>
        <div className='d-flex justify-content-center mt-5 pb-3'>
          <img
            src={imgProfile}
            className='bd-placeholder-img rounded-circle'
            style={{ width: '150px', height: '150px' }}
            alt='...'
          />
        </div>

        <div className='d-flex justify-content-center'>
          <h4 className='d-flex justify-content-center my-3'>{username}</h4>
        </div>

        <div className='d-flex justify-content-center'>{bio}</div>
      </div>
    );
  }
}

export default Profile;
