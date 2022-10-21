import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Orders = () => {
    const { products, initialCart } = useLoaderData();
    const [cart, setcart] = useState(initialCart);

    const handleRemoveItem = (id) => {
        const remaining = cart.filter(product => product.id !== id)
        setcart(remaining);
        removeFromDb(id)
    }

    const clearCart = () => {
        setcart([])
        deleteShoppingCart()
    }

    return (
        <div className='shop-container'>
            <div className='orders-container'>
                {
                    cart.map(product => <ReviewItem
                        key={product.id}
                        product={product}
                        handleRemoveItem={handleRemoveItem}
                    ></ReviewItem>)
                }
                {
                    cart.length === 0 && <h1>No items for review.Please <Link to='/' >Shop</Link> </h1>
                }

            </div>
            <div className='cart-container'>
                <Cart cart={cart}
                    clearCart={clearCart}
                ></Cart>
            </div>
        </div>
    );
};

export default Orders;