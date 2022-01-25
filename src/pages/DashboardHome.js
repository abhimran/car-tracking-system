import React, { useState } from 'react';
import ContentWrapper from '../components/ContentWrapper';

function getCartFromLocalStorage() {
  return localStorage.getItem('userData')
    ? JSON.parse(localStorage.getItem('userData'))
    : [];
}

const DashboardHome = () => {
  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useState(getCartFromLocalStorage());

  return (
    <ContentWrapper>
      <div className=''>
        <h3>Welocome, {user[0].username || ''}</h3>
        <p>THis is manager dashboard!</p>
      </div>
    </ContentWrapper>
  );
};

export default DashboardHome;
