import { useContext } from 'react';
import { assets } from '../assets/assets';
import { NavContext } from '../context/NavContext';
const Contact = () => {
  const { mode } = useContext(NavContext);
  return (
    <div>
      <h1>Contact</h1>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <img src={assets.contact_img} alt="" />
        </div>
        <div className="flex flex-col items-center justify-center   m-2">
         <div>
           <input
            type="text"
            placeholder="FullName"
            className={`w-full py-4 outline-none  ${mode ? 'bg-blue-950' : ''} ${mode ? 'text-white' : ''} `}
          />
          <input
            type="text"
            placeholder="Gmail"
            className={`w-full py-4 outline-none  ${mode ? 'bg-blue-950' : ''} ${mode ? 'text-white' : ''}`}
          />
          <button className={`w-full py-4 outline-none  ${mode ? 'bg-blue-950' : 'bg-slate-500'} ${mode ? 'text-white' : 'text-white'}`}>Contact Us</button>
         </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Contact;
