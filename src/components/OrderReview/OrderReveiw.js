import React from 'react';
import useProducts from '../../hooks/useProducts';

const OrderReveiw = () => {
    const [products] = useProducts();
    return (
        <div>
            <h1>{products.length}</h1>
            <h3>Please reveiw your order!</h3>
        </div>
    );
};

export default OrderReveiw;