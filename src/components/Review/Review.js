import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart } from '../../utilities/databaseManager';

const Review = () => {
    const {cart, setCart} = useState([]);

    useEffect(()=>{
        //cart
        const saveCart = getDatabaseCart();
        const productKey = Object.keys(saveCart);
        // console.log(productKey);

        const cartProducts = productKey.map( key => {
            const product = fakeData.find( pd => pd.key === key);
            product.quantity = saveCart[key];
            return product;
        });
        // console.log(cartProducts);
        setCart(cartProducts);
    })
    return (
        <div>
            <h1>Cart Items: {cart.length}</h1>
        </div>
    );
};

export default Review;