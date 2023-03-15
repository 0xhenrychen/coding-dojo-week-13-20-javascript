import React, { useState } from 'react';
import ColorForm from './components/ColorForm';
import ColorDisplay from './components/ColorDisplay';
import './App.css';

function App() {
    const [coloredBoxes, setColoredBoxes] = useState([]);

    return (
        <div className='App'>
            <ColorForm coloredBoxes={coloredBoxes} setColoredBoxes={setColoredBoxes} />
            <ColorDisplay coloredBoxes = {coloredBoxes} />
        </div>
    )
}
export default App;