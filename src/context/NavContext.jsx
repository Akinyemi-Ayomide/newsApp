import { createContext, useState, useEffect } from 'react';

export const NavContext = createContext();

const NavContextProvider = (props) => {
  const [toggle, setToggle] = useState(false);
  const [search, setSearch] = useState('');
  const [mode, setMode] = useState(false);

  const handleClick = () => {
    setToggle((prevToggle) => !prevToggle); // Safely toggle state
  };

  const handleMode = () => {
    setMode((prevToggle) => !prevToggle); // Safely toggle state
  };

  useEffect(() => {
    console.log(search); // Logs the updated state
  }, [search]);

  const value = {
    toggle,
    setToggle,
    handleClick,
    setSearch,
    search,
    handleMode,
    mode,
  };

  return (
    <NavContext.Provider value={value}>{props.children}</NavContext.Provider>
  );
};

export default NavContextProvider;
