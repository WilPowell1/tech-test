import React from 'react';
import '../styles/SearchResults.css';
import PropTypes from 'prop-types';

const SearchResults = ({ results }) => {

  const searchedImages = results.map((image) => 
    <img className="stock-image"
        alt="space"
        src={image}/>)

    if (!results.length) {
        return <p className="no-results">No results</p>
      } else
          return (

            <div className="search-results">
              <>
                {searchedImages}
              </>
            </div>
    )
  };

SearchResults.propTypes = {
    results: PropTypes.array
}

export default SearchResults;