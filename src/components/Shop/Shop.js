import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const firstTen = fakeData.slice(0, 10);
    const [products, setProducts] = useState(firstTen);
    
    const handleAddProduct = (product) => {
        console.log('Product Added!', product);
    }

    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    products.map(product => 
                            <Product handleAddProduct= {handleAddProduct} product={product}></Product>
                        )
                }
            </div>

            <div className="cart-container">
                <h3>This Is Cart!</h3>
            </div>
            
        </div>
    );
};

export default Shop;