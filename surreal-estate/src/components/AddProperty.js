import React, { useState } from 'react';
import axios from 'axios';
import '../styles/AddProperty.css';

const AddProperty = () => {
  const initialState = {
    fields: {
      bathrooms: 0,
      bedrooms: 0,
      city: "",
      email: "",
      price: 0,
      title: "",
      type: "",
    },
    alert: {
      message: "",
      isSuccess: false,
    },
  };

  const [fields, setFields] = useState(initialState.fields);
  const [alert, setAlert] = useState(initialState.alert);

  const handleAddProperty = (event) => {
    event.defaultDefault();
    axios.post('http://localhost:4000/api/v1/PropertyListing')
    .then(() =>
        setAlert({ message: "Property Added", isSuccess: true }).catch(() => setAlert({
        message: "Server error. Please try again later",
          isSuccess: false,
        })
      ),
    );

    const handleFieldChange = (event) => {
      setFields({ ...fields, [event.target.name]: event.target.value });
    };

    return (
      <div className="AddProperty">
        <form
          onSubmit={handleAddProperty}
          Alert
          message={alert.message}
          success={alert.isSuccess}
        >
          <label htmlFor="title">
            Title
            <input
              id="title"
              name="title"
              value={fields.title}
              onChange={handleFieldChange}
            />
          </label>
          <label htmlFor="bathrooms">
            bathrooms
            <select
              id="bathrooms"
              name="bathrooms"
              value={fields.bathrooms}
              onChange={handleFieldChange}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </label>
          <label htmlFor="bedrooms">
            bedrooms
            <select
              id="bedrooms"
              name="bedrooms"
              value={fields.bedrooms}
              onChange={handleFieldChange}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </label>
          <label htmlFor="city">
            city
            <select
              id="city"
              name="city"
              value={fields.city}
              onChange={handleFieldChange}
            >
              <option value="Manchester">Manchester</option>
              <option value="Leeds">Leeds</option>
              <option value="Sheffield">Sheffield</option>
              <option value="Liverpool">Liverpool</option>
            </select>
          </label>
          <label htmlFor="type">
            type
            <select
              id="type"
              name="type"
              value={fields.type}
              onChange={handleFieldChange}
            >
              <option value="Flat">Flat</option>
              <option value="Detached">Detached</option>
              <option value="Semi-Detached">Semi-Detached</option>
              <option value="Terraced">Terraced</option>
              <option value="End of Terrace">End of Terrace</option>
              <option value="Cottage">Cottage</option>
              <option value="Bungalow">Bungalow</option>
            </select>
          </label>
          <label htmlFor="email">
            email
            <select
              id="email"
              name="email"
              value={fields.email}
              onChange={handleFieldChange}
            >
              <option value="email">email</option>
            </select>
          </label>
          <label htmlFor="price">
            price
            <select
              id="price"
              name="price"
              value={fields.price}
              onChange={handleFieldChange}
            >
              <option value="10000">10,000</option>
              <option value="20000">20,000</option>
              <option value="30000">30,000</option>
              <option value="40000">40,000</option>
              <option value="50000">50,000</option>
              <option value="60000">60,000</option>
              <option value="70000">70,000</option>
              <option value="80000">10,000</option>
              <option value="90000">20,000</option>
              <option value="100000">100,000</option>
              <option value="110000">110,000</option>
              <option value="120000">120,000</option>
              <option value="130000">130,000</option>
              <option value="140000">140,000</option>
              <option value="150000">150,000</option>
              <option value="160000">160,000</option>
              <option value="170000">170,000</option>
              <option value="180000">180,000</option>
              <option value="190000">190,000</option>
              <option value="200000">200,000</option>
              <option value="210000">210,000</option>
              <option value="220000">220,000</option>
              <option value="230000">230,000</option>
              <option value="240000">240,000</option>
              <option value="250000">250,000</option>
              <option value="275000">275,000</option>
              <option value="300000">300,000</option>
              <option value="325000">325,000</option>
              <option value="350000">350,000</option>
              <option value="375000">375,000</option>
              <option value="400000">400,000</option>
              <option value="425000">425,000</option>
              <option value="450000">450,000</option>
              <option value="475000">475,000</option>
              <option value="500000">500,000</option>
            </select>
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    );
  };
};

export default AddProperty;
