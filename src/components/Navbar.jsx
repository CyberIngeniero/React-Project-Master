import '../css/Navbar.css';
import BoltIcon from '@mui/icons-material/Bolt';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Profile from './Profile';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar({ Token, setToken }) {
  const [ProfileState, SetProfileState] = useState(false);
  const navigate = useNavigate();

  function profileHandler() {
    SetProfileState(!ProfileState);
  }

  function Logout() {
    localStorage.clear();
    setToken();
    navigate('/login');
  }

  return (
    <nav className='navbar navbar-expand-lg navbar-light' style={{ backgroundColor: '#b5d0e4' }}>
      <div className='container-fluid'>
        <Link className='navbar-brand' to='/' style={{ fontWeight: 'bold' }}>
          <BoltIcon style={{ paddingRight: '3px' }} />
          Three Pics
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon' />
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav'>
            <li className='nav-item active'>
              <Link className='nav-link' to='/'>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/login'>
                Login
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/profile'>
                Profile
              </Link>
            </li>
          </ul>
        </div>
        {Token ? (
          <div className='profile' style={{ float: 'right' }}>
            <button
              className='btn btn-success m-1 p-2'
              onClick={Logout}
              style={{ color: '#ffff', 'backgroundColor': '#c4010a', fontWeight: 'bold' }}
            >
              Logout
            </button>
            <button onClick={profileHandler}>
              {ProfileState ? (
                <div>
                  <Profile token={Token} />
                  <AccountCircleIcon fontSize='large' />
                </div>
              ) : (
                <div>
                  <AccountCircleIcon fontSize='large' />
                </div>
              )}
            </button>
          </div>
        ) : null}
      </div>
    </nav>
  );
}

export default Navbar;
