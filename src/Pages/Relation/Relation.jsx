import '../../Components/Styles/tabs.css';

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
          />
          <div role="tabpanel" className="tab-content p-10">
            Tab content 1
          </div>

          <input
            type="radio"
            name="my_tabs_1"
            role="tab"
            className="tab text-xl font-bold"
            aria-label="Quiz"
            checked
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
    </div>
  );
};

export default Relation;
