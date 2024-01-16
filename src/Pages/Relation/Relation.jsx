import '../../Components/Styles/tabs.css';
import { MdLightbulbOutline } from 'react-icons/md';
import { RxSpeakerLoud } from 'react-icons/rx';
import { RiRestartLine } from 'react-icons/ri';
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';
import { MdFullscreen } from 'react-icons/md';
import logo from '../../assets/hyggex.png';
import textImg from '../../assets/text.png';
import { FaPlus } from 'react-icons/fa';

const Relation = () => {
  return (
    <div>
      <h1 className="mt-20 lg:text-4xl md:text-2xl text-xl text-blue-800 font-bold">
        Relations and Functions ( Mathematics )
      </h1>

      <div className="flex justify-center mt-20">
        <div role="tablist" className="tabs tabs-bordered">
          <input
            type="radio"
            name="my_tabs_1"
            role="tab"
            className="tab text-xl font-bold"
            aria-label="Study"
            checked
          />
          <div role="tabpanel" className="tab-content p-10">
            <div>
              <div className="card w-96 bg-gradient-to-tr from-blue-500  from-20% via-blue-700 via-60% to-blue-900 to-90%  text-primary-content">
                <div className="card-body">
                  <div className="flex justify-between">
                    <h2 className="text-xl font-bold">
                      <MdLightbulbOutline></MdLightbulbOutline>
                    </h2>
                    <h2 className="text-xl font-bold">
                      <RxSpeakerLoud></RxSpeakerLoud>
                    </h2>
                  </div>
                  <p className="text-center font-bold text-xl mt-5 pb-10">
                    9 + 6 + 7x - 2x - 3
                  </p>
                  <div className="card-actions justify-end"></div>
                </div>
              </div>
              <div className="flex items-center justify-between ml-10 mr-10 mt-5">
                <h1 className="font-extrabold text-2xl text-blue-900">
                  {' '}
                  <RiRestartLine />
                </h1>
                <div className="flex items-center gap-2">
                  <button className="btn bg-gradient-to-t from-cyan-600 to-blue-900 btn-circle">
                    <h1 className="text-2xl text-white">
                      <IoIosArrowBack></IoIosArrowBack>
                    </h1>
                  </button>
                  <h1 className="text-xl font-bold">01/10</h1>
                  <button className="btn bg-gradient-to-t from-cyan-600 to-blue-900 btn-circle">
                    <h1 className="text-2xl text-white">
                      <IoIosArrowForward></IoIosArrowForward>
                    </h1>
                  </button>
                </div>
                <div className="font-extrabold text-2xl text-blue-900">
                  <MdFullscreen></MdFullscreen>
                </div>
              </div>
            </div>
          </div>

          <input
            type="radio"
            name="my_tabs_1"
            role="tab"
            className="tab text-xl font-bold"
            aria-label="Quiz"
          />
          <div role="tabpanel" className="tab-content p-10">
            Tab content 2
          </div>

          <input
            type="radio"
            name="my_tabs_1"
            role="tab"
            className="tab text-xl font-bold"
            aria-label="Test"
          />
          <div role="tabpanel" className="tab-content p-10">
            Tab content 3
          </div>
          <input
            type="radio"
            name="my_tabs_1"
            role="tab"
            className="tab text-xl font-bold"
            aria-label="Game"
          />
          <div role="tabpanel" className="tab-content p-10">
            Tab content 3
          </div>
          <input
            type="radio"
            name="my_tabs_1"
            role="tab"
            className="tab text-xl font-bold"
            aria-label="Others"
          />
          <div role="tabpanel" className="tab-content p-10">
            Tab content 3
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <img className="w-[200px] h-[200px]" src={logo} alt="" />

          <div>
            <h1 className="text-xl font-bold">Published By</h1>
            <img src={textImg} className="w-[200px] h-[50px]" alt="" />
          </div>
        </div>

        <div>
          <div className="flex gap-2 items-center">
            <button className="btn bg-gradient-to-t from-cyan-600 to-blue-900 btn-circle">
              <h1 className="text-2xl text-white">
                <FaPlus></FaPlus>
              </h1>
            </button>

            <h1 className="text-3xl font-bold text-blue-800">
              Create Flashcard
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Relation;
