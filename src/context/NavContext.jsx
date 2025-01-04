import { createContext, useState, useEffect } from 'react';


export const NavContext = createContext();

const NavContextProvider = (props) => {
  const [toggle, setToggle] = useState(false);
  const [search, setSearch] = useState('');
  const [mode, setMode] = useState(false);
  const [articles, setArticles] = useState([]);
  
  const apiKey = '26e2a4deb5c74d9c99c51d7aaa9c2b5e';

  useEffect(() => {
    const fetchNews = async () => {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`,
      );
      const data = await response.json();
      setArticles(data.articles);
    };

    fetchNews();
  }, []);

useEffect(()=>{
  console.log(articles)
},[articles])
  
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
    articles
  };

  return (
    <NavContext.Provider value={value}>{props.children}</NavContext.Provider>
  );
};

export default NavContextProvider;
