import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Products.css'
import Rating from 'react-rating';

const Product = (props) => {
    const {name, img, stock, star, seller, price} = props.product;
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />;
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <p className="product-name">{name}</p>
                <div className="product-details">
                    <div className="product-details-main">
                        <p><span>by: </span>{seller}</p>
                        <p className="product-price">${price}</p>
                        <p><small>only {stock} left in stock - order soon</small></p>
                        <button onClick={() => props.handleAddToCart(props.product)} className="purches-button">{cartIcon}add to cart</button>
                    </div>
                    <div>
                        <Rating 
                            emptySymbol="far fa-star icon-color"
                            fullSymbol="fas fa-star icon-color" 
                            readonly
                            initialRating={star}>
                        </Rating>
                        <p className="features-style">Features</p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Product;