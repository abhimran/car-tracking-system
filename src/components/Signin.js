import React from 'react';
import { Link } from 'react-router-dom';

const Signin = () => {
  return (
    <div className='container'>
      <div className='signUp'>
        <div className='signUp-content'>
          <h3 className='text-center mb-4'>Login</h3>
          <form>
            <div className='mb-3'>
              <label for='exampleInputPassword1' className='form-label me-2'>
                Login as a:
              </label>
              <div className='form-check form-check-inline'>
                <input
                  className='form-check-input'
                  type='radio'
                  name='inlineRadioOptions'
                  id='inlineRadio1'
                  value='option1'
                />
                <label className='form-check-label' for='inlineRadio1'>
                  Manager
                </label>
              </div>
              <div className='form-check form-check-inline'>
                <input
                  className='form-check-input'
                  type='radio'
                  name='inlineRadioOptions'
                  id='inlineRadio2'
                  value='option2'
                />
                <label className='form-check-label' for='inlineRadio2'>
                  Operator
                </label>
              </div>
            </div>

            <div className='mb-3'>
              <label for='exampleInputEmail1' className='form-label'>
                Email address
              </label>
              <input
                type='email'
                className='form-control'
                placeholder='Enter your email'
              />
            </div>
            <div className='mb-3'>
              <label for='exampleInputPassword1' className='form-label'>
                Password
              </label>
              <input
                type='password'
                className='form-control'
                placeholder='Enter your password'
                id='exampleInputPassword1'
              />
            </div>

            <div className='d-grid gap-2'>
              <button className='btn btn-success' type='button'>
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
