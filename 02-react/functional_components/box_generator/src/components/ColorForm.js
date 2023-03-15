import React, { useState } from 'react';
    
const ColorForm = (props) => {
    const [color, setColor] = useState("");

    const {coloredBoxes, setColoredBoxes} = props;
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setColoredBoxes([...coloredBoxes, color]);
        console.log(`Adding to the array: ${coloredBoxes}`);
        // console.log(setColoredBoxes);
    };
    
    return (
        <form onSubmit={handleSubmit}>
            <h2>What color box do you want to add?</h2>
            <input type="text" name="color" placeholder="Enter your color here." onChange={(e) => setColor(e.target.value)} />
            <input type="submit" value="Add" />
        </form>
    );
};

export default ColorForm;