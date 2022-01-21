import React from 'react';
import { Link } from 'react-router-dom';

const Signin = () => {
  return (
    <div className='container'>
      <div className='signUp'>
        <div className='signUp-content'>
          <h3 className='text-center mb-4'>Login</h3>
          <form>
            <div class='mb-3'>
              <label for='exampleInputPassword1' class='form-label me-2'>
                Login as a:
              </label>
              <div class='form-check form-check-inline'>
                <input
                  class='form-check-input'
                  type='radio'
                  name='inlineRadioOptions'
                  id='inlineRadio1'
                  value='option1'
                />
                <label class='form-check-label' for='inlineRadio1'>
                  Manager
                </label>
              </div>
              <div class='form-check form-check-inline'>
                <input
                  class='form-check-input'
                  type='radio'
                  name='inlineRadioOptions'
                  id='inlineRadio2'
                  value='option2'
                />
                <label class='form-check-label' for='inlineRadio2'>
                  Operator
                </label>
              </div>
            </div>

            <div class='mb-3'>
              <label for='exampleInputEmail1' class='form-label'>
                Email address
              </label>
              <input
                type='email'
                class='form-control'
                placeholder='Enter your email'
              />
            </div>
            <div class='mb-3'>
              <label for='exampleInputPassword1' class='form-label'>
                Password
              </label>
              <input
                type='password'
                class='form-control'
                placeholder='Enter your password'
                id='exampleInputPassword1'
              />
            </div>

            <div class='d-grid gap-2'>
              <button class='btn btn-success' type='button'>
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
