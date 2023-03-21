import React from 'react';
import './ShowToDo.css';

const ShowToDo = (props) => {
    const {toDoList, setToDoList} = props;

    const deleteHandler = (id) => {
        console.log(id)
        let updatedList = toDoList.filter((toDo) => toDo.id !== id)
        console.log(updatedList);
        setToDoList(updatedList);
    }
    
    return (
        <div>
            {
                toDoList.map((toDo) => (
                    <div key={toDo.id}>
                        <p>{toDo}<input type="checkbox" id="{index}" name="{index}" /><button className="buttonDelete" onClick = {() => deleteHandler(toDo.id)}>Delete</button></p>
                    </div>
                ))
            }
        </div>
    );
}

export default ShowToDo;
