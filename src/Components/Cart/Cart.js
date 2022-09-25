import React from 'react';

const Cart = ({cart}) => {
    return (
        <div>
            <h4>this is cart</h4>
            <p>Selected Product:{cart.length}</p>
        </div>
    );
};

export default Cart;