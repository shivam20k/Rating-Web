// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import StoreList from './components/StoreList';
import AddStore from './components/AddStore';
import RateStore from './components/RateStore';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/stores" element={<StoreList />} />
        <Route path="/add-store" element={<AddStore />} />
        <Route path="/rate-store" element={<RateStore />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
