import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { add } from '../../Store/cartSlice';

const Products = () => {

    const dispatch = useDispatch();
    const [products, setProducts] = useState([]);

    useEffect( () => {
        const fetchProducts = async () => {
            const res = await fetch('https://api.escuelajs.co/api/v1/products');
            const data = await res.json();
            setProducts(data);
        }
        fetchProducts();
    }, []);

    const handleAdd = (product) => {
        dispatch(add(product.cart));
    }

    return (
        <div className='mx-10 grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {
                products?.map( product => (
                    <div className="card bg-base-100 hover:shadow-2xl shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={product?.images[1]} alt="" className="rounded" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">
                                {product?.title}
                                <div className="badge badge-secondary">$ {product?.price}</div>
                            </h2>
                            <p>{product?.description}</p>
                            <div className="card-actions">
                            <button onClick={ () => handleAdd(product)} className="btn btn-primary btn-sm">Buy Now</button>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default Products;