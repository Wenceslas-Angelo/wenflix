import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FaSearch } from 'react-icons/fa';
import './index.scss';

function Search({ setSearchTerm, setShowSideBar }) {
  const [query, setQuery] = useState('');
  const initial = useRef(true);

  useEffect(() => {
    if (initial.current) {
      initial.current = false;
      return undefined;
    }
    const timer = setTimeout(() => {
      setSearchTerm(query);
    }, 500);
    return () => clearTimeout(timer);
  }, [setSearchTerm, query]);

  return (
    <form className="search">
      <FaSearch className="search__icon" />
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => setShowSideBar(false)}
      />
    </form>
  );
}

Search.propTypes = {
  setSearchTerm: PropTypes.func,
  setShowSideBar: PropTypes.func,
};

export default Search;
