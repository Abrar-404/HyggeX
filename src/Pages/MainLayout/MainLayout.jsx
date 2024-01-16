import { Outlet } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import NaviGates from '../../Components/Navigates/NaviGates';

const MainLayout = () => {
  return (
    <div className="mx-auto lg:w-[1400px] md:w-[768px] w-[425px]">
      <div>
        <Navbar></Navbar>
        <NaviGates></NaviGates>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainLayout;
