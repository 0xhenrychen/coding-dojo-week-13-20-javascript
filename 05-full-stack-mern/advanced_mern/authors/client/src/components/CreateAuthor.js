import React, {useState} from 'react';
import axios from 'axios';
import {useNavigate, Link} from 'react-router-dom';

const CreateAuthor = (props) => {
    const navigate = useNavigate()
    
    const [author, setAuthor] = useState({
            authorName: ""
        })

    const [errors, setErrors] = useState({})
    
    const changeHandler = (e) => {
        setAuthor({...author, [e.target.name]:e.target.value})
    }

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/new', author)
            .then((res) => {
                console.log(res);
                navigate('/');
            })
            .catch((err) => {
                console.log(err.response.data.errors);
                setErrors(err.response.data.errors);
            })
    }

    return (
        <div>
            <div className="nav-flex">
                <div>
                    <h1>Favorite authors</h1>
                    <p><Link to='/'>Home</Link></p>
                </div>
            </div>
            <p>Add a new author:</p>
            <form onSubmit = {submitHandler} className="form-control form-control-md">
                <div className="create-flex">
                    <div className="create-col">
                        <div className="form-group">
                            <label htmlFor="author-name-input">Name:</label>
                            <input type = "text" name = "authorName" className="form-control" id="author-name-input" onChange = {changeHandler} value = {author.authorName} />
                            {
                                errors.authorName ?
                                <p className = "text-danger">{errors.authorName.message}</p> :
                                null
                            }
                        </div>
                        <div>
                            <button className = "btn btn-primary" onClick={() => navigate(-1) }>Cancel</button> <input type = "submit" className = "btn btn-primary" value = "Submit" />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default CreateAuthor;