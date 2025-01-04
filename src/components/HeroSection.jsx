import { useContext } from 'react';
import { assets } from '../assets/assets';
import { NavContext } from '../context/NavContext';
const HeroSection = () => {
  const { mode } = useContext(NavContext);
  return (
    <div>
      <div className="w-full h-full ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center justify-center">
            <h1
              className={`text-center m-0 font-bold mt-5 ${
                mode ? 'text-white' : ''
              }`}
            >
              STAY UPDATED
              <hr className="bg-black w-full h-8" />
            </h1>
          </div>
          <div>
            <img
              className="h-full w-full object-cover"
              src={assets.hero_img}
              alt="hero"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
