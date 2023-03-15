import React from 'react';

const ColorDisplay = (props) => {

    const {coloredBoxes} = props;

    return (
        <div className='coloredBoxes'>
            {
                coloredBoxes.map((color, index) => (
                    <div key={index} className="coloredEachBox" style={{backgroundColor: color}}>
                        {color}
                    </div>
                ))
            }
        </div>
    );
}
    
export default ColorDisplay;