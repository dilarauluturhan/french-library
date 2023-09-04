import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Popup from './components/Popup';

const App = () => {
  return (
    <>
      <Popup />
      <Header />
      <Main />
      <Footer />
    </>
  )
}

export default App;