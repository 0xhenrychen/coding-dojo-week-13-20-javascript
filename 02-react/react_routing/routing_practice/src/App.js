import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import NumberOrWord from './components/NumberOrWord';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:numberOrWord' element={<NumberOrWord />} />
          <Route path='/:numberOrWord/:colorText/:colorBG' element={<NumberOrWord />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
