import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBed, faBath, faPoundSign, faCity, faHome, faEnvelope, } from '@fortawesome/free-solid-svg-icons';

const PropertyCard = ({
    _id,
    title,
    bedrooms,
    bathrooms,
    price,
    email,
    type,
    city,
    onSaveProperty,
    userID, }) => {
  return (
    <div className="Property">
      <div data-testid="titleId" className="titleDiv">
        title
      </div>
      <div data-testid="bedroomsId" className="bedroomsDiv">
        <FontAwesomeIcon className="icon" icon={faBed} />
        bedrooms
      </div>
      <div data-testid="bathroomsId" className="bathroomsDiv">
        <FontAwesomeIcon className="icon" icon={faBath} />
        bathrooms
      </div>
      <div data-testid="typeId" className="typeDiv">
        <FontAwesomeIcon className="icon" icon={faHome} />
        type
      </div>
      <div data-testid="priceId" className="priceDiv">
        <FontAwesomeIcon className="icon" icon={faPoundSign} />
        price
      </div>
      <div data-testid="cityId" className="cityDiv">
        <FontAwesomeIcon className="icon" icon={faCity} />
        city
      </div>
      <div data-testid="emailId" className="emailDiv">
        <FontAwesomeIcon className="icon" icon={faEnvelope} />
        <a className="emailLink">email</a>
      </div>
      <div>
        {userID && (
          <a href="#" className="save">
            <i className="fas fa-star" />
            Save
          </a>
        )}
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
