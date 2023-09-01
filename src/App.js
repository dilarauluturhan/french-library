import React from 'react';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Header />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App;