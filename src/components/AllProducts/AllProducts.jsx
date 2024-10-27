import { useEffect, useState } from 'react';
import './AllProduct.css'
import SIngleProduct from '../SingleProduct/SIngleProduct';

const AllProducts = ({handleSelectedProduct}) => {
    const [products, setProducts]=useState([])

    useEffect(() => {
        fetch('./fakeData.json')
        .then(res => res.json())
        .then(data => {
         setProducts(data.products);
         
        })

    },[])
    return (
        <div>
            <h1>All Priduct.jsx</h1>
           {
            products.map((p) =>  <SIngleProduct handleSelectedProduct={handleSelectedProduct} key={p.id} product={p}></SIngleProduct>)
           }
        </div>
    );
};

export default AllProducts;