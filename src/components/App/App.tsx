import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from '../Layout/Layout';
import Homepage from '../../pages/Homepage';
import PlanningPage from '../../pages/Planningpage';
import LoginPage from '../../pages/Loginpage';
import RegisterPage from "../../pages/RegisterPage";


function App() {

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<Homepage />} />
        <Route path='/planning' element={<PlanningPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
      </Route>
    </Routes>
  );
}

export default App;
