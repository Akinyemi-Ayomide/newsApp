import { Link, NavLink } from 'react-router-dom';
import Search from './Search';
import { NavContext } from '../context/NavContext';
import { useContext } from 'react';
import { assets } from '../assets/assets';

const Navbar = () => {
  const { toggle, handleClick, handleMode, mode } = useContext(NavContext);
  return (
    <div>
      <div
        className={`px-2 py-2 flex flex-row justify-between shadow-md rounded-lg mb-2 ${
          mode ? 'bg-blue-950' : ''
        }`}
      >
        <Link to="/">
          {mode ? (
            <img src={assets.logowhite} className="w-15" alt="" />
          ) : (
            <img src={assets.logo} className="w-15" alt="" />
          )}
        </Link>

        <Search />
        <div className="flex hidden md:block">
          <ul className={`flex gap-2  ${mode ? 'text-white' : ''}`}>
            <NavLink to="/About">About</NavLink>
            <NavLink to="/Contact">Contact</NavLink>
          </ul>
        </div>
        <button className="block md:hidden px-2" onClick={handleClick}>
          {mode ? (
            <img src={assets.menuwhite} className="w-4" />
          ) : (
            <img src={assets.menu} className="w-4" />
          )}
        </button>
        <button onClick={handleMode}>
          {mode ? (
            <img src={assets.moon} alt="Moon icon" className="w-6 h-6" />
          ) : (
            <img src={assets.sun} alt="Sun icon" className="w-6 h-6" />
          )}
        </button>
      </div>
      {/* Sidebar */}
      <div
        className={`flex md:hidden bg-slate-300 z-30 top-0 bg-opacity-30 ${
          toggle ? 'right-0' : 'right-[-100%]'
        } fixed w-full h-screen justify-end`}
        onClick={handleClick}
      >
        <div
          className={`flex flex-col text-black ${
            mode ? 'bg-blue-950' : 'bg-white'
          } ${mode ? 'text-white' : ''} w-48 justify-center items-center`}
        >
          <ul className="flex flex-col gap-4">
            <NavLink className="py-2 px-7 rounded-full" to="/About">
              About
            </NavLink>
            <NavLink className="py-2 px-7 rounded-full" to="/Contact">
              Contact
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
