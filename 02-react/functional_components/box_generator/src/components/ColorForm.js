import React, { useState } from 'react';
    
const ColorForm = (props) => {
    const [color, setColor] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        props.onNewColor(color);
    };
    
    return (
        <form onSubmit={handleSubmit}>
            <h1>Add a Square</h1>
            <input placeholder="Enter your color here." onChange={(e) => setColor(e.target.value)} value={color} />
            <input type="submit" value="Add" />
        </form>
    );
};

export default ColorForm;