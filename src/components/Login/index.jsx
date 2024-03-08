import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const [loginDetails, setLoginDetails] = useState({
    username: '',
    password: ''
  });
  const handleOnSubmit = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem('users') || '[]');

    const user = users.find((user) => user.username === loginDetails.username && user.password === loginDetails.password);

    console.log('user', user);

    // localStorage.setItem('user', JSON.stringify([{ username: loginDetails.username, password: loginDetails.password }]));

    // store
    localStorage.setItem('isAuthenticated', user ? true : false);

    navigate('/dashboard');
  };

  const handleOnChange = (_e) => {
    const { target } = _e;
    const { name, value } = target;

    setLoginDetails({
      ...loginDetails,
      [name]: value
    });
  };

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username"
            onChange={handleOnChange}
            value={loginDetails.username}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" onChange={handleOnChange}
            value={loginDetails.password}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login