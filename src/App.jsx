import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Home from './pages/Home';
import Movie from './pages/Movie';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('Popular');

  return (
    <div className="app">
      <SideBar setCategory={setCategory} />
      <div className="container">
        <Header setSearchTerm={setSearchTerm} />
        <div className="pages">
          <Routes>
            <Route
              path="/"
              element={<Home searchTerm={searchTerm} category="Popular" />}
            />
            <Route
              path="/:category"
              element={<Home searchTerm={searchTerm} category={category} />}
            />
            <Route path="/movie/:movieId" element={<Movie />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
