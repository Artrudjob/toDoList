import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from '../Layout/Layout';
import Homepage from '../../pages/Homepage';

import styles from './app.module.css';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<Homepage />} />
      </Route>
    </Routes>
  );
}

export default App;
