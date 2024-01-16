import { GoHome } from 'react-icons/go';
import { IoIosArrowForward } from 'react-icons/io';
import { Link } from 'react-router-dom';

const NaviGates = () => {
  return (
    <div className="mt-20">
      <div className="text-3xl flex items-center mx-auto">
        <Link to="/">
          <div className="lg:text-3xl md:text-xl text-xl hover:text-blue-800 hover:font-bold">
            <GoHome></GoHome>
          </div>
        </Link>
        <IoIosArrowForward></IoIosArrowForward>
        <Link to="/flashcard">
          <span className="lg:text-xl md:text-xl text-sm hover:text-blue-800 hover:font-bold">
            {' '}
            <h1>Flashcard</h1>
          </span>
        </Link>
        <IoIosArrowForward></IoIosArrowForward>
        <Link to="/math">
          <span className="lg:text-xl md:text-xl text-sm hover:text-blue-800 hover:font-bold">
            {' '}
            <h1>Mathematics</h1>
          </span>
        </Link>
        <IoIosArrowForward></IoIosArrowForward>
        <Link to="/relation">
          <span className="lg:text-xl md:text-xl text-sm hover:text-blue-800 hover:font-bold">
            {' '}
            <h1>Relation and Function</h1>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default NaviGates;
