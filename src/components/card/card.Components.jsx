import React, { Component } from 'react';
import './card.style.css'

const Card = (props)  => {
        return ( 
            <div className="card-container">
                <img alt="montorimage" src="https://robohash.org/&{props.Monstor.id}?set=set1&size=150x150"/>
                <h3>{props.Monstor.name}</h3>
                <p>{props.Monstor.email}</p>
            </div>
         );
}
 
export default Card;