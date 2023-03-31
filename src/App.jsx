import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Error from './components/Error';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Home from './pages/Home';
import Movie from './pages/Movie';
import { ThemeContext } from './contexts/themeContext';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('Popular');
  const [genre, setGenre] = useState({});
  const [showSearch, setShowSearch] = useState(true);
  const [showSideBar, setShowSideBar] = useState(true);
  const [theme, setTheme] = useState('light');

  const toggleTheme = () =>
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="app" id={theme}>
        <SideBar
          setCategory={setCategory}
          setGenre={setGenre}
          setShowSearch={setShowSearch}
          showSideBar={showSideBar}
        />
        <div className={showSideBar ? 'container sidebar-open' : 'container'}>
          <Header
            setSearchTerm={setSearchTerm}
            showSearch={showSearch}
            setShowSideBar={setShowSideBar}
            showSideBar={showSideBar}
          />
          <div className="pages">
            <Routes>
              <Route
                path="/"
                element={
                  <Home
                    searchTerm={searchTerm}
                    category="Popular"
                    setShowSearch={setShowSearch}
                  />
                }
              />
              <Route
                path="/:categoryName"
                element={<Home category={category} />}
              />
              <Route path="/movie/:movieId" element={<Movie />} />
              <Route
                path="/genre/:genreName"
                element={<Home genre={genre} />}
              />
              <Route path="*" element={<Error />} />
            </Routes>
          </div>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
