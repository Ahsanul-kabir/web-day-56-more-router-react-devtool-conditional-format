import React from 'react';
import './Product.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Product = (props) => {
    // console.log(props.product.key);
    const { img, name, seller, price, stock,key } = props.product;
    return (
        <div className="product">
            <div>
                {/* <img src={props.product.img} alt=""/> */}
                <img src={img} alt="" />
            </div>
            <div>
                <h3 className="product-name"><Link to={'/product/'+key}>{name}</Link></h3>
                <br />
                <p><small>by: {seller}</small></p>
                <p>${price}</p>
                <br />
                <p><small>only {stock} left in stock - order soon</small></p>
                <button className='main-button' onClick={() => props.handleAddProduct(props.product)}
                ><FontAwesomeIcon icon={faShoppingCart} /> add to card</button>
            </div>
        </div>
    );
};

export default Product;