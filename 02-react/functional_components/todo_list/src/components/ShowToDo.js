import React from 'react';
import './ShowToDo.css';

const ShowToDo = (props) => {
    const {toDoList} = props;

    
    return (
        <div>
            {
                toDoList.map((toDo, index) => (
                    <div key={index}>
                        <p>{toDo}<input type="checkbox" id="{index}" name="{index}" /><button className="buttonDelete" onClick={deleteHandler}>Delete</button></p>
                    </div>
                ))
            }
        </div>
    );
}

export default ShowToDo;
