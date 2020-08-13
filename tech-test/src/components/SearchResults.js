import React from 'react';

const SearchResults = ({ results }) => {

    if (!results.length) {
        return <p>No results</p>
      } 
          return (
            <>
              <p>Search Results</p>
               {results.map((image) => (
                <img className="stock-image" alt="space-image" src={image} />
            ))}
        </>
    ),
};

export default SearchResults;