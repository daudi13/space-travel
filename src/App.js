import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Missions from './components/Missions';
import NavBar from './components/NavBar';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/missions" element={<Missions />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
