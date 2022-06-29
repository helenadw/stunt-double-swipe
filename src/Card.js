import React from 'react';
import './Card.css';

const Card = (item) => {
    return (
        <div className="card" id={item.props.id} >
            <div className="card-image">
                <img src={item.props.image} alt={item.props.name} className="image"/>
            </div>
            <div className="card-content">
                <h3>{item.props.name}</h3>
            </div>            
        </div>            
    );
}

export default Card;