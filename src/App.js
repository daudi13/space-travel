import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Missions from './components/Missions/Missions';
import NavBar from './components/Missions/NavBar';
import Rocket from './components/Rocket/Rocket';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Rocket />} />
        <Route path="/missions" element={<Missions />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
