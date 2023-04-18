import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useNavigate, useParams, Link} from 'react-router-dom';

const EditOneAuthor = (props) => {
    const navigate = useNavigate()
    const {id} = useParams()
    
    const [author, setAuthor] = useState({
        authorName: "",
        })

    const [errors, setErrors] = useState({})
    
    const changeHandler = (e) => {
        setAuthor({...author, [e.target.name]:e.target.value})
    }

    useEffect(() => {
        axios.get(`http://localhost:8000/api/one/${id}`)
            .then((res) => {
                console.log(res.data);
                setAuthor(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    const submitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/edit/${id}`, author)
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
                <div>
                </div>
            </div>
            <p>Edit this author:</p>
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
                            <input type = "submit" className = "btn btn-primary" value = "Cancel" /> <input type = "submit" className = "btn btn-primary" value = "Submit" />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default EditOneAuthor;