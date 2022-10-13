import '../css/Navbar.css';
import BoltIcon from '@mui/icons-material/Bolt';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Profile from './Profile';
import { useState } from 'react';
import imgProfile from '../img/profile.jpg';

function Navbar() {
  const [ProfileState, SetProfileState] = useState(false);

  function profileHandler() {
    SetProfileState(true);
  }

  return (
    <nav className='navbar' style={{ backgroundColor: '#e3f2fd' }}>
      <div className='container-fluid'>
        <a className='navbar-brand' href={0} style={{ fontWeight: 'bold' }}>
          <BoltIcon style={{ paddingRight: '3px' }} />
          Three Pics
        </a>
        <div className='profile' style={{ float: 'right' }}>
          <button onClick={profileHandler}>
            {ProfileState ? (
              <div>
                <Profile
                  avatar={imgProfile}
                  username={'@Viserys'}
                  bio={'Legitimo Heredero al trono de hierro.'}
                />
                <AccountCircleIcon fontSize='large' />
              </div>
            ) : (
              <div>
                <AccountCircleIcon fontSize='large' />
              </div>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
