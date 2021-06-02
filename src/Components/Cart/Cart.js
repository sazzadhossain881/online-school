import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart=props.cart;
    const total=cart.reduce((total,course) => total+course.price,0)
    const formatNumber=num => {
        const precision=num.toFixed(2);
        return Number(precision);
    }
    return (
        <div>
            <p>Order Summery</p>
            <p>Items Ordered:{cart.length}</p>
            <p>Total Price:${formatNumber(total)}</p>
        </div>
    );
};

export default Cart;