import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Home from './pages/Home';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <div className="app">
      <SideBar />
      <div className="container">
        <Header setSearchTerm={setSearchTerm} />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home searchTerm={searchTerm} />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
