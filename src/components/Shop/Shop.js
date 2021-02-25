import React, { useState } from 'react';
import fakeData from '../../fakeData';

const Shop = () => {
    const firstTen = fakeData.slice(0, 10);
    const [products, setProducts] = useState(firstTen);
    console.log(firstTen);
    return (
        <div>
            <h1>{products.length}</h1>
            <ul>
                {
                    products.map(product => <li>{product.name}</li>)
                }
            </ul>
        </div>
    );
};

export default Shop;