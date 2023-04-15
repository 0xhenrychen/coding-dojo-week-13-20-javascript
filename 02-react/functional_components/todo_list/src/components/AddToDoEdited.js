import React, {useState} from 'react';
import './AddToDo.css';

const AddToDo = (props) => {
    const {toDoList, setToDoList} = props;

    // const [toDo, setToDo] = useState("No ToDo Items Yet");
    const [toDo, setToDo] = useState({
        id: null
    });

    const submitHandler = (e) => {
        e.preventDefault();
        let id = crypto.randomUUID();
        console.log(id);
        let newToDo = {...toDo, id: id};
        setToDoList([...toDoList, newToDo]);
        setToDo({
            toDo
        })
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
