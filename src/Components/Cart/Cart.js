import React from 'react';
import './Cart.css'

const Cart = ({cart, clearCart}) => {

    let total = 0;
    let shipping = 0;
    let quantity = 0;
    
    for(const product of cart){
        quantity = quantity + product.quantity;
        total = total + product.price * quantity;
        shipping = shipping + product.shipping;
    }
    const tax = +(total * 0.1).toFixed(2);
    const grandTotal = (total + shipping + tax);
    return (
        <div className='cart'>
            <h4>this is cart</h4>
            <p>Selected Product:{quantity}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping: ${shipping}</p>
            <p>Tax:${tax}</p>
            <h5>Grand Total: ${grandTotal.toFixed(2)}</h5>
            <button onClick={clearCart}>Clear</button>
        </div>
    );
};

export default Cart;