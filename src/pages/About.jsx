import React, { useContext } from 'react';
import { assets } from '../assets/assets';
import { NavContext } from '../context/NavContext';
const About = () => {
  const {mode} = useContext(NavContext)
  return (
    <div>
      <h1>About</h1>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <img src={assets.about_img} alt="" />
        </div>
        <div className={`flex flex-col gap-2 justify-center items-center ${mode ? ' text-white' : ''}`}>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            inventore rerum molestiae sed dicta hic quas! Aperiam beatae
            praesentium corporis. Dolor ipsam necessitatibus soluta ea, pariatur
            veniam voluptatum incidunt fugit!
          </p>

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            inventore rerum molestiae sed dicta hic quas! Aperiam beatae
            praesentium corporis. Dolor ipsam necessitatibus soluta ea, pariatur
            veniam voluptatum incidunt fugit!
          </p>

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            inventore rerum molestiae sed dicta hic quas! Aperiam beatae
            praesentium corporis. Dolor ipsam necessitatibus soluta ea, pariatur
            veniam voluptatum incidunt fugit!
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4 mb-2">
        <div className={`flex flex-col gap-2 justify-center items-center ${mode ? ' text-white' : ''}`}>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            inventore rerum molestiae sed dicta hic quas! Aperiam beatae
            praesentium corporis. Dolor ipsam necessitatibus soluta ea, pariatur
            veniam voluptatum incidunt fugit!
          </p>

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            inventore rerum molestiae sed dicta hic quas! Aperiam beatae
            praesentium corporis. Dolor ipsam necessitatibus soluta ea, pariatur
            veniam voluptatum incidunt fugit!
          </p>

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            inventore rerum molestiae sed dicta hic quas! Aperiam beatae
            praesentium corporis. Dolor ipsam necessitatibus soluta ea, pariatur
            veniam voluptatum incidunt fugit!
          </p>
        </div>
        <div>
          <img src={assets.about_img} alt="" />
        </div>
      </div>
      
    </div>
  );
};

export default About;
