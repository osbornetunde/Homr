import React from 'react';
import './SearchBar.css';
import magnifier from '../img/magnifier.png';


const SearchBar = () => {

    return (
            <form className="search-bar">
                <input className="column1" placeholder="Where do you want to live?"/>
                <input className="column" placeholder="Type"/>
                <input className="column" placeholder="Bedrooms"/>
                <input className="column2" placeholder="Max Price"/>
                <button><img alt="icon" src={magnifier}/>Search</button>
            </form>
        
    )
}

export default SearchBar;