import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Product.css'

const Product = ({product, handleAddToCart}) => {
    const { name, img, seller, price, ratings } =product
    return (
        <div className='product'>
            <img src={img ? img : "no image found"} alt="" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>Price: {price}</p>
                <p><small>Seller: {seller}</small></p>
                <p><small>rating: {ratings} stars</small></p>
            </div>
            <button onClick={() =>handleAddToCart(product)} className='btn-cart'>
                <p>Add to cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product; <h2>This is product</h2>