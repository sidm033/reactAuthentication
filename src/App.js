// import './App.css';

import React, { useContext, useEffect, useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import AuthContext from './store/Auth-Contex';

function App() {

  const ctx = useContext(AuthContext);

  return (
    <React.Fragment>
      <Header/>
      {ctx.isLoggedIn? <Home/> : <Login/> }
      <Footer/>
    </React.Fragment>
  );

}

export default App;
