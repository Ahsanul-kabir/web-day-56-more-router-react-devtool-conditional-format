import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItems from '../ReviewItems/ReviewItems';

const Review = () => {
    const [cart, setCart] = useState([]);

    const removeProduct = (productKey) => {
        // console.log('remove clicked',productKey)
        const newCart = cart.filter(pd => pd.key != productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    }

    useEffect(() => {
        //cart
        const saveCart = getDatabaseCart();
        const productKey = Object.keys(saveCart);
        // console.log(productKey);

        const cartProducts = productKey.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = saveCart[key];
            return product;
        });
        // console.log(cartProducts);
        setCart(cartProducts);
    }, [])
    return (
        <div className='twin-container'>
            <div className='product-container'>
                {/* <h1>Cart Items: {cart.length}</h1> */}
                {
                    cart.map(pd => <ReviewItems
                        key={pd.key}
                        removeProduct={removeProduct}
                        product={pd}></ReviewItems>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Review;