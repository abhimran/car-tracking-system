import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import './assets/scss/main.scss';
import Sidebar from './components/Sidebar';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Car from './pages/Car';
import City from './pages/City';
import DashboardHome from './pages/DashboardHome';
import HomePage from './pages/HomePage';
import { Report } from './pages/Report';
import Tracking from './pages/Tracking';
import Users from './pages/Users';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Navigate to='/home' />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/home/sign-up' element={<Signup />} />
        <Route path='/home/sign-in' element={<Signin />} />

        <Route
          exact
          path='/dashboard'
          element={<Navigate to='/dashboard/home' />}
        />

        <Route exact path='/dashboard/*' element={<Sidebar />}>
          <Route path='home' element={<DashboardHome />} />
          <Route path='car' element={<Car />} />
          <Route path='users' element={<Users />} />
          <Route path='city' element={<City />} />
          <Route path='report' element={<Report />} />
          <Route path='tracking' element={<Tracking />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
