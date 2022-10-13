function Profile({ avatar, username, bio }) {
  return (
    <div>
      <img
        src={avatar}
        className='bd-placeholder-img rounded-circle'
        style={{ width: '150px', height: '150px' }}
        alt='...'
      />
      <h6 className='card-title my-3'>{username}</h6>
      <p className='card-text px-4'>{bio}</p>
    </div>
  );
}

export default Profile;
