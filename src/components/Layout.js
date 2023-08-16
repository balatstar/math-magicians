import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

function Layout() {
  return (
    <div className="wrapper">
      <Navbar />
      <Outlet />
    </div>
  );
}
export default Layout;
