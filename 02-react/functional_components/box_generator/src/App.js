import React, { useState } from 'react';
import ColorForm from './components/ColorForm';
import ColorDisplay from './components/ColorDisplay';
    
function App() {
    const [currentColor, setCurrentColor] = useState("");
    
    const yourNewColor = (newColor) => {
        setCurrentColor(newColor);
    }

    return (
        <>
            <ColorForm onNewColor={yourNewColor} />
            <ColorDisplay color={currentColor} />
        </>
    );
}
    
export default App;

// import './App.css';
// import AlbumForm from './components/AlbumForm';

// function App() {
//     return (
//         <div className="App">
//             <AlbumForm />
//         </div>
//     );
// }

// export default App;

// function App()
// {
//     const [state, setState] = useState(0)
    
//     // Not the best way of increasing the state variable. There's a chance it won't work.
//     // const increment = () => {
//     //     setState(state + 1)
//     //     console.log(state)
//     // }

//     // Better way of increasing the state variable. This will work 100% of the time.
//     const increment = () => {
//         setState(prevState => prevState + 1)
//         console.log(state)
//     }

//     // const decrement = () => {
//     //     setState(state - 1)
//     //     console.log(state)
//     // }
//     const decrement = () => {
//         setState(prevState => prevState - 1)
//         console.log(state)
//     }

//     return (
//         <div className="App">
//             <button onClick = {decrement}>-</button>
//             <span>{state}</span>
//             <button onClick = {increment}>+</button>
//         </div>
//     );
// }
// export default App;
