import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div className="mx-auto lg:w-[1400px] md:w-[768px] w-[425px]">
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainLayout;
