import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dragon from './components/dragons/Dragon';
import Footer from './components/footer/Footer';
import Missions from './components/Missions/Missions';
import NavBar from './components/Missions/NavBar';
import MyProfile from './components/MyProfile/MyProfile';
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
          <Route path="/my-profile" element={<MyProfile />} />
          <Route path="/dragons" element={<Dragon />} />
        </Routes>
      </Provider>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
