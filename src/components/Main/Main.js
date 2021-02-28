import React from 'react';
import './Main.css';
import { useEffect, useState } from 'react';
import fakeData from '../FakeData/FakeData.json'
import UserCard from '../UserCard/UserCard';
import Cart from '../Cart/Cart';

const Main = () => {
    const [users, setUsers] = useState([])
    const [cart, setCart] = useState([])
    const handleAddClick = (add) => {
        const newAdd = [...cart, add]
        setCart(newAdd);
    }
    useEffect(() => {
        setUsers(fakeData)
    }, [])
    return (
        <div className="main-container">
            <div className='single-container'>
                {
                    users.map(user => <UserCard handleAddClick={handleAddClick} user={user}></UserCard> )
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Main;