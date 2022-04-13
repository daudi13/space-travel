import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Missions from './components/Missions/Missions';
import NavBar from './components/Missions/NavBar';
import Rocket from './components/Rocket/Rocket';
import store from './redux/configureStore';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Rocket />} />
          <Route path="/missions" element={<Missions />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
