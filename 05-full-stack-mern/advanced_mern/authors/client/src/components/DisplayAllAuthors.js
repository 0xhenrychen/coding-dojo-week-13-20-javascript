import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';

const DisplayAllAuthors = (props) => {
    const [allAuthors, setAllAuthors] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:8000/api/all')
            .then((response) => {
            console.log(response);
            setAllAuthors(response.data)
            })
            .catch((error) => {
                console.log(error);
            }) 
    }, [])

    const deleteHandler = (id) => {
        console.log(id)
        axios.delete(`http://localhost:8000/api/delete/${id}`)
            .then((response) => {
                console.log(response);
                const filteredAuthors = allAuthors.filter((author) => {
                    return author._id !== id;
                  });
                  setAllAuthors(filteredAuthors);
            })
            .catch((error) => {
                console.log(error);
            })
    }
    
    return (
        <div>
            <div className="nav-flex">
                <div>
                    <h1>Favorite authors</h1>
                    <p><Link to='/new'>Add an author</Link></p>
                </div>
                <div>
                </div>
            </div>

            <div>
                <p>We have quotes by:</p>
                <table className="table table-light">
                    <thead>
                        <tr>
                            <th>Author</th>
                            <th>Actions available</th>
                        </tr>
                </thead>
                    <tbody>
                    {
                        allAuthors.map((author) => (
                                <tr key = {author._id}>
                                    <td>{author.authorName}</td>
                                    <td><Link to = {`/edit/${author._id}`}>Edit</Link> | <Link onClick = {() => deleteHandler(author._id)}>Delete</Link></td>
                                </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default DisplayAllAuthors;