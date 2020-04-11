import React, { Component } from 'react';
import Card from '../card/card.Components'
import './cardlist.style.css'

const CardList = (props)  => {
        return (    
            <div className="card-list">
                {props.Monstors.map(m=>(
                    <Card key={m.id} Monstor={m}/>
                ))}
            </div>
          );
}
 
export default CardList;