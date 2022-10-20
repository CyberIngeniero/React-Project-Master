import { useState } from 'react';
import { login } from '../services/data-service';


function Login({ setToken }) {
  const [error, setError] = useState();

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;

    login(form.username.value, form.password.value)
      .then((data) => {
        localStorage.setItem('token', data.token);
        setToken(data.token);
      })
      .catch((err) => {
        setError(err.response.data.message);
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
