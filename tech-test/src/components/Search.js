import React, { useState } from 'react';
import '../styles/Search.css';
import getImages from '../requests/getImages'; 
import PropTypes from 'prop-types';
import { FaSearch } from "react-icons/fa";

const Search = ({ setSearchResults }) => {
    const [value, setValue] = useState();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setSearchResults(await getImages(value));
    }
    
    return (
        <div className="search">
            <form className="search-form" 
                onSubmit={handleSubmit}>
                <input 
                    className="search-input"     
                    type="text" 
                    onChange={(event) => setValue(event.target.value)} />
                <button className="search-button" type="submit"><FaSearch /> </button>
            </form>
        </div>  
    );
};

Search.propTypes = {
    setSearchResults: PropTypes.func
}

export default Search;

