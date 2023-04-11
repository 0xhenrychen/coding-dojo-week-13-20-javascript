import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from '../src/views/Main';
import Detail from '../src/components/Detail';
import Update from '../src/components/Update';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Main />} path="/home" default />
          <Route element={<Detail />} path="/api/product/:id" />
          <Route element={<Update />} path="/api/product/edit/:id" />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App;