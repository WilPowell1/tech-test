import React from 'react';
import PropTypes from 'prop-types';

const PropertyCard = () => {
  return (
    <div className='Property'>
      <div data-testid="titleId" className="titleDiv">
        Title
      </div>
      <div data-testid="typeId" className="typeDiv">
        Type
      </div>
      <div data-testid="bedroomsId" className="bedroomsDiv">
        Bedrooms
      </div>
      <div data-testid="bathroomsId" className="bathroomsDiv">
        Bathrooms
      </div>
      <div data-testid="priceId" className="priceDiv">
        Price
      </div>
      <div data-testid="cityId" className="cityDiv">
        City
      </div>
      <div data-testid="emailId" className="emailDiv">
        <a className="emailLink">Email</a>
      </div>
    </div>
  );
};

PropertyCard.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  bathrooms: PropTypes.number.isRequired,
  bedrooms: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default PropertyCard;
