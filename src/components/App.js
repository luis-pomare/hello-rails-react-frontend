import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Greetings from './greetings';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Greetings />} />
        <Route path="/greetings" element={<Greetings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
