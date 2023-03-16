import React, {useState} from 'react';
import './App.css';
import AddToDo from './components/AddToDo';
import ShowToDo from './components/ShowToDo';

function App() {
    const [toDoList, setToDoList] = useState([]);

    return (
        <div className="App">
            <AddToDo toDoList={toDoList} setToDoList={setToDoList} />
            <hr></hr>
            <ShowToDo toDoList={toDoList} />
        </div>
    );
}
export default App;
