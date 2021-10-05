import React, { useEffect, useState } from 'react';
import Cart from '../../components/cart/Cart';
import Product from '../../components/Products/Product';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import './Shop.css';

const Shop = () => {
    const [products, setProduct] = useState([]);
    const [cart, setCart] = useState([]);
    const [displayProduct, setDisplayProduct] = useState([]);

    useEffect( () => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON')
            .then(res => res.json())
            .then(data => {
                setProduct(data)
                setDisplayProduct(data)
            });
    },[]);

    useEffect( () => {
        if(products.length){
            const savedItems = getStoredCart();
            const storedCart = [];
            for(const key in savedItems){
                const addProduct = products.find( product => product.key === key);
                if(addProduct){
                    const quantity = savedItems[key];
                    addProduct.quantity = quantity;
                    storedCart.push(addProduct);
                }
            }
            setCart(storedCart);
        }
    }, [products])


    const handleAddToCart = product => {
        const newCart = [...cart, product];
        setCart(newCart);
        // add to localStorage
        addToDb(product.key);
    }

    const handleSearch = event => {
        const searchText = event.target.value;
        const matchProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
        setDisplayProduct(matchProducts);
    }

    return (
        <>
            <div className="search-container">
                <input onChange={handleSearch} placeholder="Type here to search" type="text" /><FontAwesomeIcon icon={faShoppingCart} />
            </div>
            <div className="shop-container">
                <div className="product-container">
                    {
                        displayProduct.map(getProduct => <Product 
                            product={getProduct} 
                            key={getProduct.key}
                            handleAddToCart={handleAddToCart}
                        ></Product>)
                    }
                </div>
                <div className="cart-container">
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </>
    );
};

export default Shop;