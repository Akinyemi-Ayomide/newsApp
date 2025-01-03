import { useContext } from 'react';
import { assets } from '../assets/assets';
import { NavContext } from '../context/NavContext';

const Content = () => {
  const { mode, articles } = useContext(NavContext);
  return (
    <div>
      <div className="grid md:grid-cols-12">
        <div className="md:col-span-9 m-3 ">
          <div className="grid md:grid-cols-3 gap-2 ">
            {/* begin of map*/}
            {articles.map((item, index) => (
              <div
                key={index}
                className={`rounded py-2 px-2 hover:shadow-lg ${
                  mode ? 'bg-blue-950' : ''
                } ${mode ? 'text-white' : ''} ${mode ? 'shadow-white' : ''}`}
              >
                <img
                  src={item.urlToImage}
                  alt={item.title || 'Article image'}
                  className="w-full h-auto rounded"
                />
                <p>{item.category || 'General'}</p>
                <h1 className="font-bold">{item.title || 'Untitled'}</h1>
              </div>
            ))}

            {/*end of map*/}
          </div>
        </div>
        <div className="hidden md:block md:col-span-3">
          <div className="flex flex-col justify-around">
            <div className="flex flex-row gap-3 m-2 items-center">
              <img
                src={assets.about_img}
                className="w-1/4 rounded-full"
                alt=""
              />
              <div className={`items-center ${mode ? 'text-white' : ''}`}>
                <p>breakfast</p>
                <h1 className={`font-bold text-xl ${mode ? 'text-white' : ''}`}>
                  rice
                </h1>
              </div>
            </div>
            <div className="flex flex-row gap-3 m-2 items-center">
              <img
                src={assets.about_img}
                className="w-1/4 rounded-full"
                alt=""
              />
              <div className={`items-center ${mode ? 'text-white' : ''}`}>
                <p>breakfast</p>
                <h1 className={`font-bold text-xl ${mode ? 'text-white' : ''}`}>
                  rice
                </h1>
              </div>
            </div>
            <div className="flex flex-row gap-3 m-2 items-center">
              <img
                src={assets.about_img}
                className="w-1/4 rounded-full"
                alt=""
              />
              <div className={`items-center ${mode ? 'text-white' : ''}`}>
                <p>breakfast</p>
                <h1 className={`font-bold text-xl ${mode ? 'text-white' : ''}`}>
                  rice
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
