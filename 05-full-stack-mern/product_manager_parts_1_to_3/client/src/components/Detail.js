import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useParams, useNavigate} from 'react-router-dom';

const Detail = (props) => {
    const [product, setProduct] = useState({})
    const {id} = useParams();
    const navigate = useNavigate();

    const deleteProduct = (personID) => {
        axios.delete("http://localhost:8000/api/product/" + personID)
        .then(res => {
            console.log(res);
            navigate("/home"); // this will take us back to the Main.js
        })
        .catch((err) => console.log(err))
    }

    useEffect(() => {
        axios.get("http://localhost:8000/api/product/" + id)
        .then (res => {
            console.log(res.data);
            setProduct(res.data);
        })
        .catch (err => {
            console.log(err)
        });
    }, []);

    return (
        <div>
            <p>Title: {product.title}</p>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
            <p><button onClick={(e)=>{deleteProduct(product._id)}}>Delete</button></p>
        </div>
    );
}
export default Detail;