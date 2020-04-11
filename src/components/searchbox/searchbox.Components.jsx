import React from 'react';
import './searchbox.style.css'

const SearchBox = (props) => {
        return (  
            <input  
            className="search"
            type="search"
            onChange = {props.handleChange}
             />
        );
}
 
export default SearchBox;