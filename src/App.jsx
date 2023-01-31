import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Home from './pages/Home';
import Movie from './pages/Movie';
import Genre from './pages/Genre';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('Popular');
  const [genre, setGenre] = useState({});

  return (
    <div className="app">
      <SideBar setCategory={setCategory} setGenre={setGenre} />
      <div className="container">
        <Header setSearchTerm={setSearchTerm} />
        <div className="pages">
          <Routes>
            <Route path="/">
              <Route
                index
                element={<Home searchTerm={searchTerm} category="Popular" />}
              />
              <Route
                path="/:category"
                element={<Home searchTerm={searchTerm} category={category} />}
              />
            </Route>

            <Route path="/:movieId" element={<Movie />} />

            <Route path="/genre/:genreName" element={<Genre value={genre} />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
