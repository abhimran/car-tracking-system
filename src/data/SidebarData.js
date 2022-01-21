import { Flag, Home, MapPin, Trello, Truck, Users } from 'react-feather';

export const ManagerSidebarData = [
  {
    title: 'Home',
    path: '/dashboard/home',
    icon: <Home />,
    cName: 'nav-text',
  },
  {
    title: 'Car',
    path: '/dashboard/car',
    icon: <Truck />,
    cName: 'nav-text',
  },
  {
    title: 'Users',
    path: '/dashboard/users',
    icon: <Users />,
    cName: 'nav-text',
  },
  {
    title: 'City',
    path: '/dashboard/city',
    icon: <Trello />,
    cName: 'nav-text',
  },
  {
    title: 'Report',
    path: '/dashboard/report',
    icon: <Flag />,
    cName: 'nav-text',
  },
  {
    title: 'Tracking',
    path: '/dashboard/tracking',
    icon: <MapPin />,
    cName: 'nav-text',
  },
];
