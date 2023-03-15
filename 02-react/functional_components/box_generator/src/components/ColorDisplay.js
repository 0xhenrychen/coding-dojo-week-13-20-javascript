import React from 'react';

const ColorDisplay = (props) => {

    const coloredBoxes = [];

    return (
        <div>
            <h1>Current Color: {props.color}</h1>
            coloredBoxes.map((color, index) => 
                {/* <li key={index} style={{
                    height: '100px',
                    width: '100px',
                    backgroundColor: color}}>
                </li> */}
                <li key={ index }>Hello</li>
            ))
            }
        </div>
    );
}
    
export default ColorDisplay;