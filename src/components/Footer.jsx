import React, { useContext } from 'react';
import { NavContext } from '../context/NavContext';
import { NavLink } from 'react-router-dom';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FiTwitter } from 'react-icons/fi';

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
            <FaFacebook />
          </a>
          <a href="#" className="hover:text-gray-400" aria-label="Twitter">
            <FiTwitter />
          </a>
          <a href="#" className="hover:text-gray-400" aria-label="Instagram">
            <FaInstagram />
          </a>
          <div className="flex md:block">
            <ul className={`flex gap-2  ${mode ? 'text-white' : ''}`}>
              <NavLink to="/About">About</NavLink>
              <NavLink to="/Contact">Contact</NavLink>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
