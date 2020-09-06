import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropertyCard from './PropertyCard';

const Properties = () => {

  const [properties, setProperties] = useState([]);
  const [alert, setAlert] = useState({ message: "" });

  useEffect(() => {
    axios
      .get('http://localhost:4000/api/v1/PropertyListing')
      .then(({ data }) => setProperties(data))
      .catch(() => {
        setAlert({message: "You did something wrong you wally",
          isSuccess: false,
        });
      }, []);

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
          />
        ))}
      </div>
    );
  });
};

export default Properties;
