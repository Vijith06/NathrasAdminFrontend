// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddProduct from './components/product/add';
import MainProduct from './components/product/main';
import DisplayProduct from './components/product/display';
import UpdateProduct from './components/product/update';
import Orders from './components/product/orders';
import Login from './components/login';
import PrivateRoute from './components/privateroute'; // Create this file

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        
        <Route path="/" element={
          <PrivateRoute><MainProduct /></PrivateRoute>
        } />
        <Route path="/add" element={
          <PrivateRoute><AddProduct /></PrivateRoute>
        } />
        <Route path="/display/:id" element={
          <PrivateRoute><DisplayProduct /></PrivateRoute>
        } />
        <Route path="/update/:id" element={
          <PrivateRoute><UpdateProduct /></PrivateRoute>
        } />
        <Route path="/orders" element={
          <PrivateRoute><Orders /></PrivateRoute>
        } />
      </Routes>
    </Router>
  );
}

export default App;
