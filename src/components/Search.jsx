import React, { useContext, useState } from 'react';
import { NavContext } from '../context/NavContext';

const Search = () => {
  const { setSearch, search, mode } = useContext(NavContext);
  return (
    <div>
      <input
        value={search}
        type="text"
        placeholder="search..."
        onChange={(e) => setSearch(e.target.value)}
        className={`p-2 border-none border-gray-300 rounded-md outline-none ${mode ? 'bg-blue-950' : ''}`}
      />
    </div>
  );
};

export default Search;
