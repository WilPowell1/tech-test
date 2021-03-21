import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import PropertyCard from './PropertyCard';
import '../styles/Properties.css';

const Properties = ({userID}) => {
  const [properties, setProperties] = useState([]);
  const [alert, setAlert] = useState({ message: "" });

  const { search } = useLocation();

  useEffect(() => {
    axios.get(`http://localhost:4000/api/v1/PropertyListing${search}`)
      .then(({ data }) => setProperties(data))
      .catch((err) => console.error(err));
  }, [search]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/v1/PropertyListing")
      .then(({ data }) => setProperties(data))
      .catch(() => {
        setAlert({message: "You did something wrong you wally",
          isSuccess: false,
        });
      }, []);
  });

  const handleSaveProperty = (propertyId) => {
    const favRequest = {
      "propertyListing": "<_id of the property>",
      "fbUserId": "<logged in user's ID>"
    };
    axios.post('http://localhost:4000/api/v1/Favourite', {
      propertyListing: propertyId,
      fbUserId: userID,
    });
  };

  return (
    <div className="Properties">
      {properties.map((property) => (
        <PropertyCard
          key={property._id}
          title={property.title}
          bathrooms={property.bathrooms}
          bedrooms={property.bedrooms}
          type={property.type}
          email={property.email}
          city={property.city}
          href="#"
          onClick={() => onSaveProperty(_id)}
          className="save"
        />
      ))}
    </div>
  );
};

export default Properties;
