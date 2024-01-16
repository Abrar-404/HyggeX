import banner from '../../assets/work.gif';
import '../Styles/banner.css';
import '../Styles/text.css';

const Banner = () => {
  return (
    <div className="">
      <h1 className="font-bold text-center mx-auto lg:text-6xl tracking-in-expand-fwd-top md:text-3xl text-xl mt-32">
        Work Efficiently <br /> With Us
      </h1>
      <img src={banner} className="slide-in-elliptic-top-fwd" alt="" />
    </div>
  );
};

export default Banner;
