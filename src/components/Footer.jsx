import React, { useContext } from 'react';
import { NavContext } from '../context/NavContext';

const Footer = () => {
  const { mode } = useContext(NavContext);
  return (
    <footer
      className={`py-2 rounded-lg  ${mode ? 'bg-blue-950' : ''} ${
        mode ? 'text-white' : ''
      } `}
    >
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()}GlintxInternational. All rights
          reserved.
        </p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="hover:text-gray-400" aria-label="Facebook">
            Facebook
          </a>
          <a href="#" className="hover:text-gray-400" aria-label="Twitter">
            Twitter
          </a>
          <a href="#" className="hover:text-gray-400" aria-label="Instagram">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
