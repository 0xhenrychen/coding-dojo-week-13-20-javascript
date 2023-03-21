import React, {useState} from 'react';
import './App.css';

function App() {
    const [newToDo, setNewToDo] = useState("");
    const [toDos, setToDos] = useState([]);

    const handleNewToDoSubmit = (event) => {
        event.preventDefault();
        
        if (newToDo.length === 0){
            return;
        }

        const newToDoObject = {
            item: newToDo,
            status: false
        }

        setToDos([...toDos, newToDoObject])
        setNewToDo("");
    }

    const handleToDoDelete = (index) => {
        const filteredToDos = toDos.filter((toDo, i) => {
            return i!== index;
        });
        setToDos(filteredToDos);
    }

    const handleCheckBox = (index) => {
        const checkboxToDos = toDos.map((toDo, i) => {
            if (index === i) {
                toDo.status = !toDo.status;
            }
            return toDo;
        });
        setToDos(checkboxToDos);
    }

    return (
        <div className='App'>
            <form onSubmit = {(event) => {handleNewToDoSubmit(event)}}>
                <input onChange = {(event) => {setNewToDo(event.target.value)}} type="text" value={newToDo}/>
                <button className='buttonAdd'>Add</button>
            </form>
            { toDos.map((toDo, index) => {
                const toDoStyling = [];

                if (toDo.status) {
                    toDoStyling.push("linethroughToDo");
                }
                return (
                    <div key={index} className="showToDo">
                        <span className={toDoStyling.join(" ")}>{toDo.item}</span>
                        <input checked={toDos.status} onChange={(event) => handleCheckBox(index)} type="checkbox" />
                        <button className="buttonDelete" onClick = {(event) => {
                                handleToDoDelete(index);
                            }}>Delete</button>
                    </div>
                );
                })}
        </div>
    );
}

export default App;

// ! Unsuccessful attempt at this assignment on my own. Commented out the code and not using any components (AddToDo and ShowToDo).

// ! I was not able to strike out the ToDo items as well as use the id vs. index parameter in the map function. I ended up watching the video demo for help. 

// import AddToDo from './components/AddToDo';
// import ShowToDo from './components/ShowToDo';

// function App() {
//     const [toDoList, setToDoList] = useState([]);

//     return (
//         <div className="App">
//             <AddToDo toDoList={toDoList} setToDoList={setToDoList} />
//             <hr></hr>
//             <ShowToDo toDoList={toDoList} setToDoList={setToDoList} />
//         </div>
//     );
// }
// export default App;