import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './css/App.css';

import { NavBar } from './components/NavBar';
import { Home } from './components/Home';
import { Production } from './components/Production';
import { Clients } from './components/Clients';
import { Musicians } from './components/Musicians';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <main className="main-container">
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/production' element={<Production/>} />
          <Route exact path='/clients' element={<Clients/>} />
          <Route exact path='/musicians' element={<Musicians/>} />
          <Route exact path='/contact' element={<Contact/>} />
        </Routes>
      </main>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;