import BoltIcon from '@mui/icons-material/Bolt';

function Header() {
  return (
    <nav class='navbar navbar-light bg-light'>
      <a className='navbar-brand' href='...'  style={{ fontWeight: 'bold' }}>
        <BoltIcon style={{ paddingRight: '3px' }} />
        Three Pics
      </a>
    </nav>
  );
}

export default Header;
