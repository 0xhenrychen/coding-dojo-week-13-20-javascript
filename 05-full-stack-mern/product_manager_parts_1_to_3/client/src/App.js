import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from '../src/views/Main';
import Detail from '../src/components/Detail';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Main />} path="/home" default />
          <Route element={<Detail />} path="/api/product/:id" />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App;