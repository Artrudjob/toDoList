import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../Layout/Layout';
import styles from './app.module.css';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Layout />} />
    </Routes>
  );
}

export default App;
