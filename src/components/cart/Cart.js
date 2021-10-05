import React from 'react';
import "./Cart.css"

const Cart = (props) => {
    const {cart} = props;
    let totalQuratity = 0;
    let total = 0;
    for(const product of cart) {
        if(!product.quantity){
            product.quantity = 1;
        }
        total = total + product.price * product.quantity;
        totalQuratity = totalQuratity + product.quantity;
    }
    const shipping = total > 0 ? 15 : 0;
    const tax = (total + shipping) * 0.1;
    const grandTotal = (total + shipping + tax);

    /* const totalReducer = (previous, product) => previous + product.price;
    const total = cart.reduce(totalReducer, 0);
    */

    return (
        <div>
            <div className="order-details">
                    <h2>Order Summary</h2>
                    <p className="order-item">Items ordered:{totalQuratity}</p>
                    <p>Total:$ {total.toFixed(2)}</p>
                    <p>Shipping:$ {shipping.toFixed(2)}</p>
                    <p>Tax:$ {tax.toFixed(2)}</p>
                    <p>Grand Total:$ {grandTotal.toFixed(2)}</p>
            </div>
        </div>
    );
};

export default Cart;