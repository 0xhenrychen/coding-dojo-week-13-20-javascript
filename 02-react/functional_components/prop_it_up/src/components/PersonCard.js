import React from "react";

const PersonCard = (props) => {
    return (
        <div>
            <h1>{props.lastName}, {props.firstName}</h1>
            <h2>Age: {props.age}</h2>
            <p>Hair Color: {props.hairColor}</p>
        </div>
    )
}
export default PersonCard;