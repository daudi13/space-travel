import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Missions from './components/Missions/Missions';
import NavBar from './components/Missions/NavBar';
import MyProfile from './components/MyProfile/MyProfile';
import Rocket from './components/Rocket/Rocket';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Rocket />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/my-profile" element={<MyProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
