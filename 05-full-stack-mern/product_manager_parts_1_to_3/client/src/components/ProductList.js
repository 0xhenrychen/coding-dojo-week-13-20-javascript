import React, {useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const ProductList = (props) => {

    const {removeFromDom, productList, setProductList} = props;

    const deleteProduct = (personID) => {
        axios.delete("http://localhost:8000/api/product/" + personID)
            .then((res) => {removeFromDom(personID)})
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        axios.get("http://localhost:8000/api/product")
            .then((res) => {
                console.log(res.data);
                console.log(res.data.item);
                setProductList(res.data.item);            
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <div>
            <h1>All Products:</h1>
            {
                productList.map((product, index) => (
                    <div key={index}>
                        <Link to={`/api/product/${product._id}`}>{product.title}</Link> <Link to={`/api/product/edit/${product._id}`}>Edit</Link> <button onClick={(e)=>{deleteProduct(product._id)}}>Delete</button>
                    </div>
                ))
            }
        </div>
    )
}

export default ProductList;