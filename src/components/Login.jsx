import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { login } from '../services/data-service';

function Login({ setToken }) {
  const [error, setError] = useState();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;

    login(form.username.value, form.password.value)
      .then((data) => {
        localStorage.setItem('token', data.token);
        setToken(data.token);
        navigate('/');
      })
      .catch((err) => {
        setError('Invalid email or password');
      });
  }

  return (
    <div>
      {error && <div className='alert alert-danger'>{error}</div>}
      <form onSubmit={handleSubmit}>
        <input type='text' name='username' className='form-control mn-3' placeholder='Username' />
        <input type='password' name='password' className='form-control mn-3' placeholder='password' />
        <button type='submit' className='btn btn-success'>
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
