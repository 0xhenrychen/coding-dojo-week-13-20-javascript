import React from "react";

const PersonCard = (props) => {
    return (
        <div>
            <h1>{props.lastName}, {props.firstName}</h1>
            <h2>Age: {props.age}</h2>
            <p>Hair Color: {props.hairColor}</p>
            <button onClick={() => alert("This button has been clicked!")}>Click Me</button>
        </div>
    )
}
export default PersonCard;