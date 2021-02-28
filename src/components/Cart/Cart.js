import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart;
    // console.log(cart)
    const totalCost = cart.reduce((totalCost, cost)=> totalCost + cost.salary,0)
    return (
        <div className='cart'>
            <h2>Request sent : {cart.length}</h2>
            <h3>Total salary : ${totalCost}</h3>
        </div>
    );
};

export default Cart;