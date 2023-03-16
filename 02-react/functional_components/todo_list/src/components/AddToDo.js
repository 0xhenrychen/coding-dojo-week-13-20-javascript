import React, {useState} from 'react';
import './AddToDo.css';

const AddToDo = (props) => {
    const {toDoList, setToDoList} = props;

    const [toDo, setToDo] = useState("No ToDo Items Yet");

    const submitHandler = (e) => {
        e.preventDefault();
        setToDoList([...toDoList, toDo]);
        console.log(toDoList);
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                <input type="text" name="todo" placeholder="Add ToDo item." onChange={(e) =>setToDo(e.target.value)} />
                <input type="submit" value="Add" />
            </form>
        </div>
    );
}

export default AddToDo;
