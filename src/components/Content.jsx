import { useContext } from 'react';
import { assets } from '../assets/assets';
import { NavContext } from '../context/NavContext';

const Content = () => {
  const { mode } = useContext(NavContext);
  return (
    <div>
      <div className="grid md:grid-cols-12">
        <div className="md:col-span-9 m-3 ">
          <div className="grid md:grid-cols-3 gap-2 ">
            <div
              className={`rounded py-2 px-2  hover:shadow-lg ${
                mode ? 'bg-blue-950' : ''
              }  ${mode ? 'text-white' : ''}  ${mode ? 'shadow-white' : ''}`}
            >
              <img src={assets.contact_img} alt="" />
              <p>Breakfast</p>
              <h1>Rice</h1>
            </div>
            <div
              className={`rounded py-2 px-2  hover:shadow-lg ${
                mode ? 'bg-blue-950' : ''
              }  ${mode ? 'text-white' : ''}`}
            >
              <img src={assets.contact_img} alt="" />
              <p>Breakfast</p>
              <h1>Rice</h1>
            </div>
            <div
              className={`rounded py-2 px-2  hover:shadow-lg ${
                mode ? 'bg-blue-950' : ''
              }  ${mode ? 'text-white' : ''}`}
            >
              <img src={assets.contact_img} alt="" />
              <p>Breakfast</p>
              <h1>Rice</h1>
            </div>
            <div
              className={`rounded py-2 px-2  hover:shadow-lg ${
                mode ? 'bg-blue-950' : ''
              }  ${mode ? 'text-white' : ''}`}
            >
              <img src={assets.contact_img} alt="" />
              <p>Breakfast</p>
              <h1>Rice</h1>
            </div>
            <div
              className={`rounded py-2 px-2  hover:shadow-lg ${
                mode ? 'bg-blue-950' : ''
              }  ${mode ? 'text-white' : ''}`}
            >
              <img src={assets.contact_img} alt="" />
              <p>Breakfast</p>
              <h1>Rice</h1>
            </div>
            <div
              className={`rounded py-2 px-2  hover:shadow-lg ${
                mode ? 'bg-blue-950' : ''
              }  ${mode ? 'text-white' : ''}`}
            >
              <img src={assets.contact_img} alt="" />
              <p>Breakfast</p>
              <h1>Rice</h1>
            </div>
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
