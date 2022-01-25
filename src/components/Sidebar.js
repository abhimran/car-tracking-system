import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { ManagerSidebarData } from '../data/SidebarData';

function getCartFromLocalStorage() {
  return localStorage.getItem('userData')
    ? JSON.parse(localStorage.getItem('userData'))
    : [];
}

const Sidebar = () => {
  const location = useLocation().pathname;
  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useState(getCartFromLocalStorage());

  return (
    <div>
      <div className='navbar'>
        <div className='d-flex justify-content-between align-items-center w-100 px-5'>
          <div>
            <img src='/images/car.png' alt='car-icon' />
          </div>
          <div>
            <h5>{user[0].username || ''}</h5>
            <Link to='#'>
              <span className='text-danger'>Log out</span>
            </Link>
          </div>
        </div>
      </div>
      <nav className={'nav-menu active'}>
        <ul className='nav-menu-items'>
          {ManagerSidebarData.map((item, index) => {
            return (
              <li
                key={index}
                className={`nav-text ${location === item.path ? 'active' : ''}`}
              >
                <Link to={item.path}>
                  {item.icon}
                  <span className='ms-3'>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <Outlet />
    </div>
  );
};

export default Sidebar;
