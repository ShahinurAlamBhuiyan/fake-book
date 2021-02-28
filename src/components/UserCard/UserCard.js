import React from 'react';
import './UserCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faUserPlus } from '@fortawesome/free-solid-svg-icons'

const UserCard = (props) => {
    const {name, email, salary, url, phone} = props.user;
    return (
        <div className='user-container'>
            <img src={url} alt=""/>
            <h2>Name : {name}</h2>
            <h4>Email : {email}</h4>
            <h4>Phone No : {phone}</h4>
            <h4 className='salary'>Salary : ${salary}</h4>
            <button onClick={()=>props.handleAddClick(props.user)}><FontAwesomeIcon icon={faUserPlus} /> Hire me</button>
            
        </div>
    );
};

export default UserCard;