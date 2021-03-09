import React, { useState } from 'react';
import './Shop.css'
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);
    const [cart,setCart] =useState([]);

    const handleAddProduct = (product) => {
        const newCart = [...cart,product];
        setCart(newCart);
    }
    return (
        <div>
            <div className="shop-container">
                <div className="product-container">
                    {
                        products.map(pd =>
                            <Product
                            showAddToCart={true}
                            product={pd}
                            handleAddProduct = {handleAddProduct}
                            ></Product>)
                    }
                </div>
                <div className="cart-container">
                    {/* <h5>Order Summary: {cart.length}</h5> */}
                    <Cart cart={cart}></Cart>
                </div>
            </div>

        </div>
    );
};

export default Shop;