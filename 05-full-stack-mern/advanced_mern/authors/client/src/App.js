import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import DisplayAllAuthors from './components/DisplayAllAuthors';
import CreateAuthor from './components/CreateAuthor';
import EditOneAuthor from './components/EditOneAuthor';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path = '/' element = {<DisplayAllAuthors />} />
                    <Route path = '/new' element = {<CreateAuthor />} />
                    <Route path = '/edit/:id' element = {<EditOneAuthor />} />
                </Routes>
            </BrowserRouter>
            
        </div>
    );
}

export default App;
