import React, { useState } from 'react';
import '../styles/Search.css';
import getImages from '../requests/getImages'; 
import PropTypes from 'prop-types';

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
                <button             className="search-button"       type="submit">Search</button>
            </form>
        </div>  
    );
};

Search.propTypes = {
    setSearchResults: PropTypes.func
}

export default Search;

