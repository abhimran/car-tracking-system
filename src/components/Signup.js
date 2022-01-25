import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';

const Signup = () => {
  // const [confirmPass, setConfirmPass] = useState([]);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPass: '',
  });

  const { confirmPass, username, email, password } = formData;
  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (password === confirmPass) {
      localStorage.setItem('userData', JSON.stringify([formData]));
      navigate('/home/sign-in');
    } else {
      alert('Password does not match');
    }
  };
  return (
    <div className='container'>
      <div className='signUp'>
        <div className='signUp-content'>
          <h3 className='text-center mb-4'>Create account</h3>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className='mb-3'>
              <label htmlFor='exampleInputPassword1' className='form-label'>
                User name
              </label>
              <input
                name='username'
                value={username}
                onChange={(e) => onChange(e)}
                type='text'
                className='form-control'
                placeholder='Enter your name'
              />
            </div>

            <div className='mb-3'>
              <label htmlFor='exampleInputEmail1' className='form-label'>
                Email address
              </label>
              <input
                type='email'
                name='email'
                value={email}
                onChange={(e) => onChange(e)}
                required
                className='form-control'
                placeholder='Enter your email'
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

            <div className='mb-3'>
              <label htmlFor='exampleInputPassword1' className='form-label'>
                Confirm password
              </label>
              <input
                className='form-control'
                type='password'
                placeholder='Confirm your password'
                name='confirmPass'
                value={confirmPass}
                onChange={(e) => onChange(e)}
                minLength='6'
                required
              />
            </div>

            <div className='d-grid gap-2'>
              <button className='btn btn-success' type='submit'>
                Sign up
              </button>
            </div>
          </form>

          <div className='text-end mt-4'>
            Already have an account? <Link to='/home/sign-in'>Sign in</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
