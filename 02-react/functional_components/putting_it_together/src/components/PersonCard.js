import React, {useState} from "react";

const PersonCard = (props) => {
    const [age, setAge] = useState({clickCount: props.age});

    const handleClick = () => {setAge({clickCount: age.clickCount + 1});
    }
    return (
        <div>
            <h1>{props.lastName}, {props.firstName}</h1>
            <h2>Age: {age.clickCount}</h2>
            <p>Hair Color: {props.hairColor}</p>
            <button onClick = {handleClick}>Birthday Button for {props.firstName} {props.lastName}</button>
        </div>
    )
}
export default PersonCard;