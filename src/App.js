import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import DescriptionPage from './Components/Description/DescriptionPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/desc' element={<DescriptionPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
