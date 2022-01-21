import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className='homePage'>
      <div className="='head p-5 text-center">
        <h2>Car tracking system</h2>
      </div>
      <div className=' d-flex align-items-center justify-content-center'>
        <div className='manager-dashboard'>
          <div className='dashboard-home '>
            <Link to='/home/sign-up'>
              <img
                src='/images/manager-dashboard.jpg'
                alt='manager-dashboard'
              ></img>
            </Link>
          </div>
          <h4 className='text-center mt-3 text-black'>Manager dashboard</h4>
        </div>

        <div className='operator-dashboard'>
          <div className='dashboard-home'>
            <Link to='/home/sign-up'>
              <img
                src='/images/operator-dashboard.png'
                alt='manager-dashboard'
              ></img>
            </Link>
          </div>
          <h4 className='text-center mt-3 text-black'>Operator dashboard</h4>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
