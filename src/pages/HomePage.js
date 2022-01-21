const HomePage = () => {
  return (
    <div className='homePage'>
      <div className="='head p-5 text-center">
        <h1>Car tracking system</h1>
      </div>
      <div className=' d-flex align-items-center justify-content-center'>
        <div className='dashboard-home manager-dashboard'>
          <img
            src='/images/manager-dashboard.jpg'
            alt='manager-dashboard'
          ></img>
          <h4 className='text-center mt-3'>Manager dashboard</h4>
        </div>
        <div className='dashboard-home operator-dashboard'>
          <img
            src='/images/operator-dashboard.png'
            alt='manager-dashboard'
          ></img>
          <h4 className='text-center mt-3'>Operator dashboard</h4>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
