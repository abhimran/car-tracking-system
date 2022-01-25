import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Signin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;
  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const userData = JSON.parse(localStorage.getItem('userData'));

    const user = userData.some(
      (item) => item.email === email && item.password === password
    );
    if (user) {
      navigate('/dashboard');
    } else {
      alert('User does nt match');
    }
  };

  return (
    <div className='container'>
      <div className='signUp'>
        <div className='signUp-content'>
          <h3 className='text-center mb-4'>Login</h3>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className='mb-3'>
              <label htmlFor='exampleInputEmail1' className='form-label'>
                Email address
              </label>
              <input
                type='email'
                className='form-control'
                placeholder='Enter your email'
                name='email'
                value={email}
                onChange={(e) => onChange(e)}
                required
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='exampleInputPassword1' className='form-label'>
                Password
              </label>
              <input
                type='password'
                className='form-control'
                placeholder='Enter your password'
                id='exampleInputPassword1'
                name='password'
                value={password}
                onChange={(e) => onChange(e)}
                minLength='6'
                required
              />
            </div>

            <div className='d-grid gap-2'>
              <button className='btn btn-success' type='submit'>
                Sign in
              </button>
            </div>
          </form>

          <div className='text-end mt-4'>
            Didn't have an account? <Link to='/home/sign-up'>Sign up</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
