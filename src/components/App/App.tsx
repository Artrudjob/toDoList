import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from '../Layout/Layout';
import Homepage from '../../pages/Homepage';
import Planningpage from '../../pages/Planningpage';
import Loginpage from '../../pages/Loginpage';

import styles from './app.module.css';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<Homepage />} />
        <Route path='/planning' element={<Planningpage />} />
        <Route path='/login' element={<Loginpage />} />
      </Route>
    </Routes>
  );
}

export default App;
